'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { effects } from '@/lib/theme';
import { CodeIcon, DesignServicesIcon, StorageIcon } from '@/components/icons';
import AnimatedSection from '../ui/AnimatedSection';
import { useRef } from 'react';
import { useMouseFollow } from '@/lib/animations';
import { StaggeredChildren } from '../ui/AnimatedSection';

const services = [
  {
    title: 'Web Development',
    description: 'Building modern, responsive web applications with React, Next.js, and TypeScript.',
    icon: CodeIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive user interfaces with a focus on user experience.',
    icon: DesignServicesIcon,
  },
  {
    title: 'Backend Development',
    description: 'Developing robust backend solutions with Node.js, Python, and cloud services.',
    icon: StorageIcon,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Apply mouse follow effect
  useMouseFollow(sectionRef, {
    intensity: 0.2,
    size: 600
  });
  
  return (
    <Box 
      component="section" 
      py={8} 
      ref={sectionRef}
      sx={{
        ...effects.sectionBackground,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container>
        <AnimatedSection animation="fadeIn">
          <Typography 
            variant="h2" 
            textAlign="center" 
            mb={6} 
            className="gradient-text"
          >
            Services
          </Typography>
        </AnimatedSection>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={service.title}>
              <AnimatedSection animation="fadeInUp" delay={0.2 * (index + 1)}>
                <Box
                  p={4}
                  sx={{
                    ...effects.glassEffect(),
                    ...effects.hoverTransition,
                    height: '100%',
                    borderRadius: 2,
                  }}
                >
                  <service.icon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 