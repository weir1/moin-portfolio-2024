import { createClient } from '@supabase/supabase-js'

// Use default values for static export builds
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-for-build.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key-for-build'

// Only create the client if we're in a browser environment or if we have real values
const createSupabaseClient = () => {
  // For static exports, we don't want to create a client during build
  if (typeof window === 'undefined' && 
      (supabaseUrl === 'https://placeholder-for-build.supabase.co' || 
       supabaseAnonKey === 'placeholder-key-for-build')) {
    // Return a mock client for build time
    return {
      from: () => ({
        select: () => ({ data: null, error: null }),
        insert: () => ({ data: null, error: null }),
        update: () => ({ data: null, error: null }),
      }),
      auth: {
        signIn: () => Promise.resolve({ user: null, session: null, error: null }),
        signOut: () => Promise.resolve({ error: null }),
      },
    } as any;
  }
  
  // Create a real client for browser or if we have real values
  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabaseClient();

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