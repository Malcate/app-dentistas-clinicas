// Tipos para o aplicativo odontológico

export interface User {
  id: string
  email: string
  name?: string
  clinic_id?: string
  stripe_customer_id?: string
  subscription_plan?: 'free' | 'pro' | 'enterprise'
  subscription_status?: 'active' | 'canceled' | 'past_due' | 'trialing'
  created_at: string
  updated_at: string
}

export interface Post {
  id: number
  title: string
  content?: string
  platform: 'instagram' | 'facebook' | 'linkedin' | 'twitter'
  scheduled_for: string
  status: 'draft' | 'scheduled' | 'published' | 'failed'
  engagement: {
    likes: number
    comments: number
    shares: number
  }
  user_id: string
  clinic_id: string
  created_at: string
  updated_at: string
}

export interface Template {
  id: number
  name: string
  category: string
  preview: string
  color: string
  content?: any
  is_premium?: boolean
}

export interface SupportMessage {
  id: number
  user_id: string
  clinic_id: string
  message: string
  is_admin_reply: boolean
  created_at: string
  admin_id?: string
}

export interface Subscription {
  id: string
  user_id: string
  stripe_subscription_id: string
  stripe_customer_id: string
  plan: 'free' | 'pro' | 'enterprise'
  status: 'active' | 'canceled' | 'past_due' | 'trialing'
  current_period_start: string
  current_period_end: string
  created_at: string
  updated_at: string
}

export interface CanvasElement {
  id: number
  type: 'text' | 'image' | 'shape' | 'icon'
  content: string
  x: number
  y: number
  width?: number
  height?: number
  fontSize?: number
  color?: string
  fontFamily?: string
  fontWeight?: string
  shapeType?: string
  borderColor?: string
  borderWidth?: number
}

export interface DesignTemplate {
  id: number
  name: string
  category: string
  preview: string
  color: string
  elements?: CanvasElement[]
}

// Tipos para formulários
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  name: string
  email: string
  password: string
}

export interface ForgotPasswordForm {
  email: string
}

// Tipos para API responses
export interface ApiResponse<T = any> {
  data?: T
  error?: string
  message?: string
}

export interface CheckoutSessionResponse {
  url: string
}

export interface PortalSessionResponse {
  url: string
}