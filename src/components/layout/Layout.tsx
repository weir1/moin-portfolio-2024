'use client';

import { Box, Container, useTheme } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import animationUtils from '@/lib/animations';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const theme = useTheme();
  
  // Initialize GSAP animations
  useEffect(() => {
    animationUtils.initializeAnimations();
    console.log('GSAP animations initialized in Layout');
  }, []);
  
  // Set data-theme attribute for CSS
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.palette.mode);
    console.log('Theme set to:', theme.palette.mode);
    
    // Add mouse move handler for the entire page
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme.palette.mode]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Global mouse gradient effect */}
      <div className="decorative-gradient"></div>
      
      <Header />
      <Box component="main" sx={{ flex: 1, position: 'relative' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 