'use client';

import { useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { effects } from '@/lib/theme';
import AnimatedSection from '../ui/AnimatedSection';
import { useMouseFollow } from '@/lib/animations';

// Ensure ScrollTrigger is registered
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const metrics = [
  {
    value: 500000,
    label: 'Revenue Generated',
    prefix: '$',
    suffix: '+',
  },
  {
    value: 95,
    label: 'Client Success Rate',
    suffix: '%',
  },
  {
    value: 50,
    label: 'Projects Completed',
    suffix: '+',
  },
];

export default function MetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);
  
  // Apply mouse follow effect
  useMouseFollow(sectionRef, {
    intensity: 0.2,
    size: 600
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      metrics.forEach((metric, index) => {
        const numberEl = numbersRef.current[index];
        if (!numberEl) return;

        ScrollTrigger.create({
          trigger: numberEl,
          start: 'top center+=100',
          onEnter: () => {
            gsap.to(numberEl, {
              duration: 2,
              innerHTML: metric.value.toString(),
              snap: { innerHTML: 1 },
              ease: 'power2.out',
            });
          },
          once: true,
        });
      });
    }, metricsRef);

    return () => ctx.revert();
  }, []);

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
            Our Impact
          </Typography>
        </AnimatedSection>
        
        <div ref={metricsRef}>
          <Grid container spacing={4} justifyContent="center">
            {metrics.map((metric, index) => (
              <Grid item xs={12} md={4} key={metric.label}>
                <AnimatedSection animation="fadeInUp" delay={0.2 * (index + 1)}>
                  <Box
                    sx={{
                      ...effects.glassEffect(),
                      ...effects.hoverTransition,
                      p: 4,
                      textAlign: 'center',
                      height: '100%',
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="h3" gutterBottom>
                      {metric.prefix}
                      <Box
                        component="span"
                        ref={(el: HTMLSpanElement | null) => {
                          numbersRef.current[index] = el;
                        }}
                        sx={{ color: 'primary.main' }}
                      >
                        0
                      </Box>
                      {metric.suffix}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {metric.label}
                    </Typography>
                  </Box>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Box>
  );
} 