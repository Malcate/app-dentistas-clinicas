import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utilitários para formatação de data em português
export function formatDate(date: string | Date, format: 'short' | 'long' | 'time' = 'short'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'America/Sao_Paulo'
  }
  
  switch (format) {
    case 'short':
      options.day = '2-digit'
      options.month = '2-digit'
      options.year = 'numeric'
      break
    case 'long':
      options.weekday = 'long'
      options.day = 'numeric'
      options.month = 'long'
      options.year = 'numeric'
      break
    case 'time':
      options.hour = '2-digit'
      options.minute = '2-digit'
      break
  }
  
  return dateObj.toLocaleDateString('pt-BR', options)
}

// Utilitário para formatação de números (engajamento, alcance, etc.)
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

// Utilitário para calcular taxa de engajamento
export function calculateEngagementRate(engagement: number, reach: number): number {
  if (reach === 0) return 0
  return (engagement / reach) * 100
}

// Utilitário para gerar cores aleatórias para o calendário
export function generateCalendarColor(platform: string): string {
  const colors = {
    instagram: '#E4405F',
    facebook: '#1877F2',
    linkedin: '#0A66C2',
    whatsapp: '#25D366'
  }
  return colors[platform as keyof typeof colors] || '#6B7280'
}

// Utilitário para validar horários de postagem
export function isOptimalPostingTime(date: Date, platform: string): 'optimal' | 'good' | 'regular' {
  const hour = date.getHours()
  const dayOfWeek = date.getDay() // 0 = domingo, 6 = sábado
  
  // Horários otimizados para odontologia no Brasil
  const optimalTimes = {
    instagram: {
      weekdays: [12, 18, 20], // 12h, 18h, 20h
      weekends: [10, 14, 19]  // 10h, 14h, 19h
    },
    facebook: {
      weekdays: [9, 13, 18],  // 9h, 13h, 18h
      weekends: [12, 15, 19]  // 12h, 15h, 19h
    },
    linkedin: {
      weekdays: [8, 12, 17],  // 8h, 12h, 17h
      weekends: [10, 14]      // 10h, 14h (menos ativo)
    }
  }
  
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
  const platformTimes = optimalTimes[platform as keyof typeof optimalTimes]
  
  if (!platformTimes) return 'regular'
  
  const relevantTimes = isWeekend ? platformTimes.weekends : platformTimes.weekdays
  
  if (relevantTimes.includes(hour)) return 'optimal'
  if (relevantTimes.some(time => Math.abs(time - hour) <= 1)) return 'good'
  
  return 'regular'
}

// Utilitário para gerar hashtags baseadas no conteúdo
export function generateHashtags(content: string, specialty?: string): string[] {
  const baseHashtags = [
    '#odontologia', '#dentista', '#saude', '#sorriso', '#cuidados'
  ]
  
  const specialtyHashtags = {
    implantes: ['#implante', '#implantodontia', '#reabilitacao'],
    estetica: ['#estetica', '#clareamento', '#lentes', '#harmonizacao'],
    ortodontia: ['#ortodontia', '#aparelho', '#alinhamento'],
    preventiva: ['#prevencao', '#limpeza', '#profilaxia'],
    protese: ['#protese', '#reabilitacao', '#protesedentaria']
  }
  
  let hashtags = [...baseHashtags]
  
  if (specialty && specialtyHashtags[specialty as keyof typeof specialtyHashtags]) {
    hashtags = [...hashtags, ...specialtyHashtags[specialty as keyof typeof specialtyHashtags]]
  }
  
  // Adicionar hashtags baseadas no conteúdo
  const contentLower = content.toLowerCase()
  if (contentLower.includes('implante')) hashtags.push('#implante')
  if (contentLower.includes('clareamento')) hashtags.push('#clareamento')
  if (contentLower.includes('ortodontia')) hashtags.push('#ortodontia')
  if (contentLower.includes('limpeza')) hashtags.push('#limpeza')
  
  // Remover duplicatas e limitar a 10 hashtags
  return [...new Set(hashtags)].slice(0, 10)
}

// Utilitário para validar conexões de redes sociais
export function validateSocialConnection(platform: string, token: string): boolean {
  // Simulação de validação - em produção, faria chamada para API
  return token && token.length > 10
}

// Utilitário para calcular melhor horário para postar
export function getBestPostingTime(analytics: any[], platform: string): { hour: number; day: number } {
  // Análise simplificada - em produção, usaria dados reais de analytics
  const defaultTimes = {
    instagram: { hour: 18, day: 2 }, // Terça, 18h
    facebook: { hour: 13, day: 3 },  // Quarta, 13h
    linkedin: { hour: 12, day: 2 },  // Terça, 12h
    whatsapp: { hour: 10, day: 1 }   // Segunda, 10h
  }
  
  return defaultTimes[platform as keyof typeof defaultTimes] || { hour: 12, day: 2 }
}

// Utilitário para gerar sugestões de conteúdo por IA
export function generateAIPrompt(type: string, tone: string, specialty?: string): string {
  const prompts = {
    feed: {
      professional: `Crie uma legenda profissional para um post sobre ${specialty || 'odontologia'} que eduque o público sobre a importância dos cuidados dentários.`,
      friendly: `Escreva uma legenda amigável e acolhedora sobre ${specialty || 'tratamentos dentários'} que faça o paciente se sentir confortável.`,
      motivational: `Crie uma legenda motivadora sobre ${specialty || 'saúde bucal'} que inspire as pessoas a cuidarem melhor dos dentes.`,
      educational: `Desenvolva um conteúdo educativo sobre ${specialty || 'odontologia'} com dicas práticas para o dia a dia.`
    },
    story: {
      professional: `Crie um texto curto e profissional para story sobre ${specialty || 'procedimentos odontológicos'}.`,
      friendly: `Escreva um texto descontraído para story sobre ${specialty || 'cuidados dentários'}.`,
      motivational: `Crie uma frase motivadora para story sobre ${specialty || 'sorriso saudável'}.`,
      educational: `Desenvolva uma dica rápida para story sobre ${specialty || 'higiene bucal'}.`
    }
  }
  
  return prompts[type as keyof typeof prompts]?.[tone as keyof typeof prompts.feed] || 
         'Crie um conteúdo sobre odontologia em português.'
}

// Utilitário para detectar dispositivo móvel
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

// Utilitário para debounce (útil para busca e inputs)
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Utilitário para copiar texto para clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Erro ao copiar texto:', err)
    return false
  }
}

// Utilitário para download de imagem
export function downloadImage(url: string, filename: string): void {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}