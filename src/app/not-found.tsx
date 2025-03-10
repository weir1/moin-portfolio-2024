'use client';

import { Box, Container, Typography } from '@mui/material';
import GradientButton from '@/components/ui/GradientButton';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 8,
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 600 }}>
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </Typography>
        <GradientButton component={Link} href="/" size="large">
          Return Home
        </GradientButton>
      </Box>
    </Container>
  );
} 