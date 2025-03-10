'use client';

import { Box, CircularProgress, Container } from '@mui/material';

export default function Loading() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    </Container>
  );
} 