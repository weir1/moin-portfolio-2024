'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useStore } from '@/lib/store/themeStore';
import { createAppTheme } from '@/lib/theme';
import { useEffect } from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const { theme } = useStore();
  const currentTheme = createAppTheme(theme);
  
  // Set data-theme attribute for CSS
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    console.log('Theme set in providers:', theme);
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
} 