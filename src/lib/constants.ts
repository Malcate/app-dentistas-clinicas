// Constantes para o aplicativo de marketing odontológico

// Templates pré-definidos para posts odontológicos
export const DENTAL_TEMPLATES = [
  {
    id: 'implante-antes-depois',
    name: 'Implante - Antes e Depois',
    category: 'implantes',
    description: 'Template para mostrar transformações com implantes',
    preview: '🦷',
    elements: [
      { type: 'title', content: 'TRANSFORMAÇÃO COMPLETA', position: 'top' },
      { type: 'images', content: 'before-after', position: 'center' },
      { type: 'cta', content: 'Agende sua consulta', position: 'bottom' }
    ]
  },
  {
    id: 'clareamento-resultado',
    name: 'Clareamento Dental',
    category: 'estetica',
    description: 'Template para resultados de clareamento',
    preview: '✨',
    elements: [
      { type: 'title', content: 'SORRISO MAIS BRANCO', position: 'top' },
      { type: 'image', content: 'smile-result', position: 'center' },
      { type: 'benefits', content: 'list', position: 'bottom' }
    ]
  },
  {
    id: 'ortodontia-progresso',
    name: 'Ortodontia - Progresso',
    category: 'ortodontia',
    description: 'Template para mostrar evolução ortodôntica',
    preview: '😊',
    elements: [
      { type: 'title', content: 'EVOLUÇÃO DO TRATAMENTO', position: 'top' },
      { type: 'timeline', content: 'progress-images', position: 'center' },
      { type: 'info', content: 'treatment-details', position: 'bottom' }
    ]
  },
  {
    id: 'harmonizacao-facial',
    name: 'Harmonização Facial',
    category: 'harmonizacao',
    description: 'Template para procedimentos de harmonização',
    preview: '💫',
    elements: [
      { type: 'title', content: 'HARMONIZAÇÃO FACIAL', position: 'top' },
      { type: 'image', content: 'face-harmony', position: 'center' },
      { type: 'procedures', content: 'list', position: 'bottom' }
    ]
  },
  {
    id: 'limpeza-preventiva',
    name: 'Limpeza Preventiva',
    category: 'preventiva',
    description: 'Template para profilaxia e prevenção',
    preview: '🧼',
    elements: [
      { type: 'title', content: 'PREVENÇÃO É O MELHOR REMÉDIO', position: 'top' },
      { type: 'tips', content: 'prevention-tips', position: 'center' },
      { type: 'schedule', content: 'appointment-cta', position: 'bottom' }
    ]
  },
  {
    id: 'protese-reabilitacao',
    name: 'Prótese Dentária',
    category: 'protese',
    description: 'Template para reabilitação protética',
    preview: '🦷',
    elements: [
      { type: 'title', content: 'REABILITAÇÃO COMPLETA', position: 'top' },
      { type: 'comparison', content: 'before-after', position: 'center' },
      { type: 'benefits', content: 'prosthesis-benefits', position: 'bottom' }
    ]
  }
]

// Textos pré-definidos para IA por especialidade
export const AI_TEXT_TEMPLATES = {
  implantes: {
    professional: [
      "Os implantes dentários representam a solução mais moderna e eficaz para substituição de dentes perdidos. Com tecnologia de ponta e materiais biocompatíveis, oferecemos resultados duradouros e naturais.",
      "A reabilitação com implantes dentários proporciona não apenas a restauração da função mastigatória, mas também a recuperação da autoestima e qualidade de vida do paciente.",
      "Implantes osseointegrados: a ciência a serviço do seu sorriso. Procedimento seguro, previsível e com alta taxa de sucesso a longo prazo."
    ],
    friendly: [
      "Que tal recuperar a confiança no seu sorriso? 😊 Os implantes dentários podem transformar sua vida! Venha conversar conosco sobre as possibilidades.",
      "Perdeu um dentinho? Não se preocupe! Com implantes dentários, você pode ter um sorriso completo e natural novamente. Estamos aqui para ajudar! 🦷✨",
      "Seu sorriso merece o melhor cuidado! Os implantes são uma solução incrível para quem quer voltar a sorrir sem preocupações. Vamos conversar?"
    ],
    motivational: [
      "Não deixe que a falta de dentes limite seus sonhos! Com implantes dentários, você pode conquistar o mundo com um sorriso radiante! 💪✨",
      "Sua nova vida começa com um novo sorriso! Os implantes dentários são o primeiro passo para uma transformação completa. Você merece isso!",
      "Acredite no poder do seu sorriso! Com implantes dentários, você pode enfrentar qualquer desafio com confiança total. Vamos juntos nessa jornada!"
    ]
  },
  estetica: {
    professional: [
      "A odontologia estética combina arte e ciência para criar sorrisos harmoniosos e naturais. Utilizamos técnicas avançadas para realçar a beleza do seu sorriso.",
      "Lentes de contato dental e facetas em porcelana: tecnologia de precisão para resultados excepcionais em estética dental.",
      "O clareamento dental profissional oferece resultados seguros e duradouros, devolvendo a luminosidade natural dos seus dentes."
    ],
    friendly: [
      "Que tal dar aquele up no seu sorriso? 😍 Temos várias opções de tratamentos estéticos para deixar você ainda mais radiante!",
      "Seu sorriso é único e merece brilhar! ✨ Venha descobrir como podemos realçar ainda mais sua beleza natural.",
      "Sonha com um sorriso de cinema? 🎬 Estamos aqui para tornar esse sonho realidade com muito carinho e profissionalismo!"
    ]
  },
  ortodontia: {
    professional: [
      "A ortodontia moderna oferece soluções discretas e eficazes para alinhamento dental. Aparelhos estéticos e alinhadores invisíveis proporcionam conforto durante o tratamento.",
      "O tratamento ortodôntico não apenas melhora a estética do sorriso, mas também promove saúde bucal através do correto posicionamento dos dentes.",
      "Ortodontia personalizada: cada caso é único e merece um plano de tratamento específico para resultados otimizados."
    ],
    friendly: [
      "Dentes alinhados, vida mais feliz! 😊 A ortodontia pode transformar não só seu sorriso, mas sua autoestima também!",
      "Aparelho não é mais aquele 'sorriso metálico'! Temos opções super discretas para você se sentir confiante durante todo o tratamento! ✨",
      "Que tal um sorriso perfeitamente alinhado? Com a ortodontia moderna, é mais fácil e confortável do que você imagina!"
    ]
  }
}

// Hashtags populares por categoria
export const POPULAR_HASHTAGS = {
  geral: [
    '#odontologia', '#dentista', '#saude', '#sorriso', '#cuidados',
    '#saudebucal', '#dentes', '#clinica', '#tratamento', '#prevencao'
  ],
  implantes: [
    '#implante', '#implantodontia', '#reabilitacao', '#protese',
    '#osseointegração', '#cirurgia', '#transformacao', '#qualidadedevida'
  ],
  estetica: [
    '#estetica', '#clareamento', '#lentes', '#facetas', '#harmonizacao',
    '#sorriso', '#beleza', '#autoestima', '#porcelana', '#design'
  ],
  ortodontia: [
    '#ortodontia', '#aparelho', '#alinhamento', '#invisalign',
    '#brackets', '#estetico', '#correcao', '#mordida'
  ],
  preventiva: [
    '#prevencao', '#limpeza', '#profilaxia', '#higiene', '#fluor',
    '#caries', '#gengivite', '#manutencao', '#checkup'
  ],
  harmonizacao: [
    '#harmonizacao', '#botox', '#preenchimento', '#facial',
    '#estetica', '#rejuvenescimento', '#beleza', '#autoestima'
  ]
}

// Horários otimizados para cada rede social
export const OPTIMAL_POSTING_TIMES = {
  instagram: {
    weekdays: [
      { hour: 12, engagement: 'high', description: 'Horário do almoço' },
      { hour: 18, engagement: 'optimal', description: 'Fim do expediente' },
      { hour: 20, engagement: 'high', description: 'Noite em casa' }
    ],
    weekends: [
      { hour: 10, engagement: 'good', description: 'Manhã de sábado' },
      { hour: 14, engagement: 'high', description: 'Tarde de domingo' },
      { hour: 19, engagement: 'optimal', description: 'Noite de domingo' }
    ]
  },
  facebook: {
    weekdays: [
      { hour: 9, engagement: 'good', description: 'Início do dia' },
      { hour: 13, engagement: 'optimal', description: 'Pausa do almoço' },
      { hour: 18, engagement: 'high', description: 'Saída do trabalho' }
    ],
    weekends: [
      { hour: 12, engagement: 'high', description: 'Meio-dia' },
      { hour: 15, engagement: 'optimal', description: 'Tarde relaxante' },
      { hour: 19, engagement: 'good', description: 'Início da noite' }
    ]
  },
  linkedin: {
    weekdays: [
      { hour: 8, engagement: 'optimal', description: 'Início do expediente' },
      { hour: 12, engagement: 'high', description: 'Pausa do almoço' },
      { hour: 17, engagement: 'good', description: 'Final do expediente' }
    ],
    weekends: [
      { hour: 10, engagement: 'low', description: 'Manhã de sábado' },
      { hour: 14, engagement: 'low', description: 'Tarde de domingo' }
    ]
  }
}

// Métricas de referência para odontologia
export const BENCHMARK_METRICS = {
  instagram: {
    engagementRate: { good: 3, excellent: 6 },
    reachRate: { good: 10, excellent: 20 },
    followersGrowth: { monthly: 5 } // percentual
  },
  facebook: {
    engagementRate: { good: 2, excellent: 4 },
    reachRate: { good: 8, excellent: 15 },
    followersGrowth: { monthly: 3 }
  },
  linkedin: {
    engagementRate: { good: 4, excellent: 8 },
    reachRate: { good: 12, excellent: 25 },
    followersGrowth: { monthly: 7 }
  }
}

// Configurações padrão para novos usuários
export const DEFAULT_SETTINGS = {
  timezone: 'America/Sao_Paulo',
  language: 'pt-BR',
  autoPublish: false,
  notifications: {
    email: true,
    push: true,
    beforePublish: 30 // 30 minutos antes
  },
  aiSettings: {
    tone: 'professional',
    includeHashtags: true,
    maxHashtags: 8,
    includeEmojis: true
  },
  colors: ['#3B82F6', '#60A5FA', '#FFFFFF'],
  postingSchedule: {
    instagram: { frequency: 'daily', times: ['12:00', '18:00'] },
    facebook: { frequency: 'alternate', times: ['13:00', '18:00'] },
    linkedin: { frequency: 'weekly', times: ['08:00', '12:00'] }
  }
}

// Tipos de conteúdo recomendados por dia da semana
export const CONTENT_CALENDAR_SUGGESTIONS = {
  monday: {
    theme: 'Motivação',
    content: 'Posts motivacionais para começar a semana',
    hashtags: ['#segundafeira', '#motivacao', '#novasemananovasorriso']
  },
  tuesday: {
    theme: 'Educação',
    content: 'Dicas educativas sobre saúde bucal',
    hashtags: ['#dicasdesaude', '#educacao', '#saudebucal']
  },
  wednesday: {
    theme: 'Procedimentos',
    content: 'Apresentação de tratamentos e procedimentos',
    hashtags: ['#tratamentos', '#procedimentos', '#tecnologia']
  },
  thursday: {
    theme: 'Depoimentos',
    content: 'Casos de sucesso e depoimentos de pacientes',
    hashtags: ['#depoimentos', '#casosdesucesso', '#transformacao']
  },
  friday: {
    theme: 'Bem-estar',
    content: 'Dicas de bem-estar e qualidade de vida',
    hashtags: ['#bemestar', '#qualidadedevida', '#sextafeira']
  },
  saturday: {
    theme: 'Lifestyle',
    content: 'Conteúdo mais descontraído e lifestyle',
    hashtags: ['#lifestyle', '#sabado', '#relaxar']
  },
  sunday: {
    theme: 'Reflexão',
    content: 'Posts reflexivos e preparação para nova semana',
    hashtags: ['#domingo', '#reflexao', '#preparacao']
  }
}

// Cores da identidade visual odontológica
export const DENTAL_BRAND_COLORS = {
  primary: {
    blue: '#3B82F6',
    lightBlue: '#60A5FA',
    darkBlue: '#1E40AF'
  },
  neutral: {
    white: '#FFFFFF',
    lightGray: '#F3F4F6',
    gray: '#6B7280',
    darkGray: '#374151'
  },
  accent: {
    green: '#10B981', // Saúde
    teal: '#14B8A6', // Confiança
    cyan: '#06B6D4'  // Modernidade
  },
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6'
  }
}