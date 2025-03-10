'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { effects } from '@/lib/theme';
import GradientButton from '../ui/GradientButton';

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                background: effects.gradientBg.background,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Full-Stack Digital Growth Expert
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 500 }}
            >
              Helping businesses grow their online presence through expert Google Ads management, SEO optimization, and modern web development.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <GradientButton href="/portfolio" size="large">
                View Portfolio
              </GradientButton>
              <GradientButton href="/contact" variant="outlined" size="large">
                Get in Touch
              </GradientButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 