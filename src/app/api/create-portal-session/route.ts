import { NextRequest, NextResponse } from 'next/server'
import { createCustomerPortal } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json()

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    // Buscar dados do usuário
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()

    if (userError || !user || !user.stripe_customer_id) {
      return NextResponse.json(
        { error: 'User not found or no Stripe customer ID' },
        { status: 404 }
      )
    }

    // Criar sessão do portal do cliente
    const portalSession = await createCustomerPortal(user.stripe_customer_id)

    return NextResponse.json({ url: portalSession.url })
  } catch (error) {
    console.error('Error creating customer portal session:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}