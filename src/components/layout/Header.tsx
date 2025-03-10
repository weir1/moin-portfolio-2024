'use client';

import { useState } from 'react';
import { AppBar, Box, Container, IconButton, Stack, useTheme } from '@mui/material';
import { Menu as MenuIcon, DarkMode, LightMode } from '@mui/icons-material';
import Link from 'next/link';
import { effects } from '@/lib/theme';
import { useStore } from '@/lib/store/themeStore';
import GradientButton from '../ui/GradientButton';
import MobileMenu from './MobileMenu';

const menuItems = [
  { text: 'Services', href: '/services' },
  { text: 'Portfolio', href: '/portfolio' },
  { text: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const { theme: themeMode, toggleTheme } = useStore();

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        ...effects.glassEffect(0.8)(theme),
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: 64 }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Box
              component="span"
              sx={{
                fontSize: 24,
                fontWeight: 700,
                background: effects.gradientBg.background,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Moin Digital
            </Box>
          </Link>

          {/* Desktop Menu */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {menuItems.map(({ text, href }) => (
              <GradientButton
                key={text}
                component={Link}
                href={href}
                variant="outlined"
                size="small"
              >
                {text}
              </GradientButton>
            ))}
            <IconButton 
              onClick={toggleTheme}
              sx={{
                ml: 1,
                color: 'text.primary',
                ...effects.hoverTransition,
              }}
            >
              {themeMode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Stack>

          {/* Mobile Menu Button */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <IconButton 
              onClick={toggleTheme}
              sx={{
                color: 'text.primary',
                ...effects.hoverTransition,
              }}
            >
              {themeMode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>
            <IconButton
              sx={effects.hoverTransition}
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </AppBar>
  );
} 