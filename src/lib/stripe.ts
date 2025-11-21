import Stripe from 'stripe'
import { SUBSCRIPTION_PLANS } from './subscription-plans'

// Verificar se estamos no servidor
const isServer = typeof window === 'undefined'

// Verificar se a chave do Stripe está configurada corretamente
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (isServer && (!stripeSecretKey || stripeSecretKey === 'Asdfg615243')) {
  console.warn('⚠️ STRIPE_SECRET_KEY não está configurada corretamente. Funcionalidades de pagamento não estarão disponíveis.')
}

// Inicializar Stripe apenas no servidor e se a chave estiver configurada corretamente
let stripe: Stripe | null = null

if (isServer && stripeSecretKey && stripeSecretKey !== 'Asdfg615243' && stripeSecretKey.startsWith('sk_')) {
  stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2024-06-20',
  })
}

export { stripe }

// Re-exportar os planos para compatibilidade
export { SUBSCRIPTION_PLANS } from './subscription-plans'

// Função para verificar se o Stripe está configurado
export function isStripeConfigured(): boolean {
  return isServer && stripe !== null
}

// Função para criar sessão de checkout
export async function createCheckoutSession(
  priceId: string,
  customerId?: string,
  successUrl?: string,
  cancelUrl?: string
) {
  if (!isServer) {
    throw new Error('Esta função só pode ser executada no servidor.')
  }
  
  if (!stripe) {
    throw new Error('Stripe não está configurado. Configure STRIPE_SECRET_KEY nas variáveis de ambiente.')
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl || `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
    cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
    customer: customerId,
    allow_promotion_codes: true,
    billing_address_collection: 'required',
    locale: 'pt-BR',
  })

  return session
}

// Função para criar portal do cliente
export async function createCustomerPortal(customerId: string) {
  if (!isServer) {
    throw new Error('Esta função só pode ser executada no servidor.')
  }
  
  if (!stripe) {
    throw new Error('Stripe não está configurado. Configure STRIPE_SECRET_KEY nas variáveis de ambiente.')
  }

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
    locale: 'pt-BR',
  })

  return portalSession
}

// Função para criar cliente no Stripe
export async function createStripeCustomer(email: string, name: string) {
  if (!isServer) {
    throw new Error('Esta função só pode ser executada no servidor.')
  }
  
  if (!stripe) {
    throw new Error('Stripe não está configurado. Configure STRIPE_SECRET_KEY nas variáveis de ambiente.')
  }

  const customer = await stripe.customers.create({
    email,
    name,
    metadata: {
      app: 'dental-social'
    }
  })

  return customer
}