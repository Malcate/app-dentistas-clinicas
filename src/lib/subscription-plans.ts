// Configuração dos planos de assinatura
// Este arquivo pode ser usado tanto no cliente quanto no servidor

export const SUBSCRIPTION_PLANS = {
  free: {
    name: 'Gratuito',
    price: 0,
    priceId: null,
    features: [
      'Até 10 posts por mês',
      'Templates básicos',
      'Suporte por email'
    ],
    limits: {
      posts: 10,
      templates: 5,
      users: 1
    }
  },
  pro: {
    name: 'Profissional',
    price: 4900, // R$ 49,00 em centavos
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID,
    features: [
      'Posts ilimitados',
      'Todos os templates',
      'IA para textos',
      'Agendamento avançado',
      'Relatórios detalhados',
      'Suporte prioritário'
    ],
    limits: {
      posts: -1, // ilimitado
      templates: -1,
      users: 3
    }
  },
  enterprise: {
    name: 'Empresarial',
    price: 9900, // R$ 99,00 em centavos
    priceId: process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID,
    features: [
      'Tudo do plano Pro',
      'Usuários ilimitados',
      'White label',
      'API personalizada',
      'Suporte 24/7',
      'Gerente de conta dedicado'
    ],
    limits: {
      posts: -1,
      templates: -1,
      users: -1
    }
  }
}

export type SubscriptionPlan = keyof typeof SUBSCRIPTION_PLANS
export type PlanConfig = typeof SUBSCRIPTION_PLANS[SubscriptionPlan]