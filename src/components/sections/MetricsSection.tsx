'use client';

import { useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { effects } from '@/lib/theme';

gsap.registerPlugin(ScrollTrigger);

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
  const metricsRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

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

      // Fade in animation for the entire section
      gsap.from(metricsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: metricsRef.current,
          start: 'top center+=100',
        },
      });
    }, metricsRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box 
      component="section" 
      py={8} 
      ref={metricsRef}
      sx={effects.sectionBackground}
    >
      <Container>
        <Typography 
          variant="h2" 
          textAlign="center" 
          mb={6}
          sx={effects.gradientText}
        >
          Our Impact
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {metrics.map((metric, index) => (
            <Grid item xs={12} md={4} key={metric.label}>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 