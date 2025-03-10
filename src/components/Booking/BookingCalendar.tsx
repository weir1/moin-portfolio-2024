import { useState } from 'react'
import { DateCalendar } from '@mui/x-date-pickers'
import { Card, Grid, Button, Typography } from '@mui/material'
import { supabase } from '@/lib/supabase/config'
import type { BookingSlot } from '@/lib/supabase/config'

export const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availableSlots, setAvailableSlots] = useState<BookingSlot[]>([])

  const fetchAvailableSlots = async (date: Date) => {
    const { data, error } = await supabase
      .from('booking_slots')
      .select('*')
      .eq('date', date.toISOString().split('T')[0])
      .eq('status', 'available')

    if (data) setAvailableSlots(data)
  }

  return (
    <Card sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <DateCalendar 
            value={selectedDate}
            onChange={(newDate) => {
              setSelectedDate(newDate)
              if (newDate) fetchAvailableSlots(newDate)
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Available Slots</Typography>
          {availableSlots.map((slot) => (
            <Button
              key={slot.id}
              variant="outlined"
              fullWidth
              sx={{ mb: 1 }}
            >
              {slot.time}
            </Button>
          ))}
        </Grid>
      </Grid>
    </Card>
  )
} 