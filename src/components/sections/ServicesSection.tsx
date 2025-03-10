'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { effects } from '@/lib/theme';
import { CodeIcon, DesignServicesIcon, StorageIcon } from '@/components/icons';

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
  return (
    <Box component="section" py={8} sx={effects.sectionBackground}>
      <Container>
        <Typography variant="h2" textAlign="center" mb={6} sx={effects.gradientText}>
          Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={4} key={service.title}>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 