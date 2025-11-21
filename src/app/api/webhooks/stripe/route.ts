import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  // Verificar se o Stripe está configurado
  if (!stripe) {
    console.error('Stripe não está configurado')
    return NextResponse.json(
      { error: 'Stripe not configured' },
      { status: 503 }
    )
  }

  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    )
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET não está configurado')
    return NextResponse.json(
      { error: 'Webhook secret not configured' },
      { status: 503 }
    )
  }

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object
        
        // Atualizar status da assinatura do usuário
        await supabase
          .from('users')
          .update({
            subscription_status: 'active',
            subscription_plan: session.metadata?.plan || 'pro',
            updated_at: new Date().toISOString()
          })
          .eq('stripe_customer_id', session.customer)

        // Registrar pagamento
        await supabase
          .from('payments')
          .insert({
            user_id: session.metadata?.userId,
            clinic_id: session.metadata?.clinicId,
            stripe_payment_id: session.payment_intent,
            amount: session.amount_total,
            currency: session.currency,
            status: 'completed',
            plan: session.metadata?.plan || 'pro'
          })

        break

      case 'customer.subscription.updated':
        const subscription = event.data.object
        
        await supabase
          .from('users')
          .update({
            subscription_status: subscription.status,
            updated_at: new Date().toISOString()
          })
          .eq('stripe_customer_id', subscription.customer)

        break

      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object
        
        await supabase
          .from('users')
          .update({
            subscription_status: 'inactive',
            subscription_plan: 'free',
            updated_at: new Date().toISOString()
          })
          .eq('stripe_customer_id', deletedSubscription.customer)

        break

      case 'invoice.payment_failed':
        const failedInvoice = event.data.object
        
        await supabase
          .from('users')
          .update({
            subscription_status: 'past_due',
            updated_at: new Date().toISOString()
          })
          .eq('stripe_customer_id', failedInvoice.customer)

        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
