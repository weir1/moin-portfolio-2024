'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { effects } from '@/lib/theme';
import GradientButton from '../ui/GradientButton';
import AnimatedSection from '../ui/AnimatedSection';
import { useRef } from 'react';
import { useMouseFollow } from '@/lib/animations';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Apply mouse follow effect
  useMouseFollow(sectionRef, {
    intensity: 0.3,
    size: 800
  });
  
  return (
    <Box
      component="section"
      ref={sectionRef}
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
            <AnimatedSection animation="fadeIn">
              <Typography
                variant="h1"
                gutterBottom
                className="gradient-text"
                sx={{
                  mb: 2,
                  fontWeight: 'bold',
                }}
              >
                Full-Stack Digital Growth Expert
              </Typography>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={0.3}>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: 500 }}
              >
                Helping businesses grow their online presence through expert Google Ads management, SEO optimization, and modern web development.
              </Typography>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={0.5}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <GradientButton href="/portfolio" size="large">
                  View Portfolio
                </GradientButton>
                <GradientButton href="/contact" variant="outlined" size="large">
                  Get in Touch
                </GradientButton>
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 