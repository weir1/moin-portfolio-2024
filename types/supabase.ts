export interface ContactSubmission {
  id: number
  created_at: string
  name: string
  email: string
  message: string
  status: 'new' | 'read' | 'replied'
}

export interface BookingSlot {
  id: number
  created_at: string
  date: string
  time: string
  name: string | null
  email: string | null
  status: 'available' | 'booked' | 'cancelled'
  meeting_type: string | null
} 