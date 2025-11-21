export type Database = {
  public: {
    Tables: {
      plans: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          features: string[]
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          features: string[]
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          features?: string[]
          created_at?: string
        }
      }
      purchases: {
        Row: {
          id: string
          user_id: string
          plan_id: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          plan_id: string
          status: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          plan_id?: string
          status?: string
          created_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          role: string
          content: string
          rating: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          role: string
          content: string
          rating: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string
          content?: string
          rating?: number
          created_at?: string
        }
      }
      faqs: {
        Row: {
          id: string
          question: string
          answer: string
          created_at: string
        }
        Insert: {
          id?: string
          question: string
          answer: string
          created_at?: string
        }
        Update: {
          id?: string
          question?: string
          answer?: string
          created_at?: string
        }
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
}