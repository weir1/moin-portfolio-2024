'use client';

import { Box, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import Link from 'next/link';
import { effects } from '@/lib/theme';
import GradientButton from '../ui/GradientButton';

const socialLinks = [
  { Icon: GitHub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { Icon: LinkedIn, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
];

const footerLinks = [
  { text: 'Services', href: '/services' },
  { text: 'Portfolio', href: '/portfolio' },
  { text: 'Contact', href: '/contact' },
];

export default function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        ...effects.glassEffect(0.05)(theme),
        borderBottom: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        mt: 'auto',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  background: effects.gradientBg.background,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                }}
              >
                Moin Digital
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Full-Stack Digital Growth Expert specializing in Google Ads, SEO, and Web Development.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {footerLinks.map(({ text, href }) => (
                <GradientButton
                  key={text}
                  component={Link}
                  href={href}
                  variant="outlined"
                  size="small"
                  sx={{ justifyContent: 'flex-start' }}
                >
                  {text}
                </GradientButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <Stack direction="row" spacing={2}>
              {socialLinks.map(({ Icon, href, label }) => (
                <GradientButton
                  key={label}
                  href={href}
                  variant="outlined"
                  size="small"
                  aria-label={label}
                  onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
                >
                  <Icon />
                </GradientButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
          © {currentYear} Moin Digital. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
} 