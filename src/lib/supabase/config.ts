import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!)

// Database types
export type ContactSubmission = {
  id: number
  created_at: string
  name: string
  email: string
  message: string
  status: 'new' | 'read' | 'replied'
}

export type BookingSlot = {
  id: number
  created_at: string
  date: string
  time: string
  name: string
  email: string
  status: 'pending' | 'confirmed' | 'cancelled'
  meeting_type: 'consultation' | 'project_discussion' | 'general'
} 