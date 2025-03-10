'use client';

import { createTheme, alpha, Components, Theme, PaletteOptions, ThemeOptions } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const themeColors = {
  primary: {
    main: '#FF3366',
    light: '#FF6B93',
    dark: '#CC1A47',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#FF9933',
    light: '#FFB366',
    dark: '#CC7A29',
    contrastText: '#FFFFFF',
  },
};

// Effects utility
export const effects = {
  gradientBg: {
    background: `linear-gradient(135deg, ${themeColors.primary.main} 0%, ${themeColors.secondary.main} 100%)`,
  },
  
  gradientText: {
    background: `linear-gradient(135deg, ${themeColors.primary.main} 0%, ${themeColors.secondary.main} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  sectionBackground: (theme: Theme) => ({
    position: 'relative',
    background: theme.palette.mode === 'dark'
      ? `linear-gradient(135deg, ${alpha('#0F172A', 0.95)} 0%, ${alpha('#1E293B', 0.95)} 100%)`
      : `linear-gradient(135deg, ${alpha('#F8FAFC', 0.95)} 0%, ${alpha('#FFFFFF', 0.95)} 100%)`,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.mode === 'dark'
        ? `radial-gradient(circle at 50% 0%, ${alpha(themeColors.primary.main, 0.15)}, transparent 50%)`
        : `radial-gradient(circle at 50% 0%, ${alpha(themeColors.primary.main, 0.08)}, transparent 50%)`,
      pointerEvents: 'none',
    },
  }),
  
  hoverTransition: {
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },

  glassEffect: (opacity: number = 0.15) => (theme: Theme) => ({
    backgroundColor: theme.palette.mode === 'dark' 
      ? alpha('#FFFFFF', 0.03) 
      : alpha('#FFFFFF', 0.5),
    backdropFilter: 'blur(12px)',
    border: `1px solid ${
      theme.palette.mode === 'dark' 
        ? 'rgba(255, 255, 255, 0.1)' 
        : 'rgba(15, 23, 42, 0.1)'
    }`,
  }),
};

const createPalette = (mode: 'light' | 'dark'): PaletteOptions => ({
  mode,
  primary: themeColors.primary,
  secondary: themeColors.secondary,
  background: {
    default: mode === 'dark' ? '#0F172A' : '#F8FAFC',
    paper: mode === 'dark' ? '#1E293B' : '#FFFFFF',
  },
  text: {
    primary: mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(15, 23, 42, 0.9)',
    secondary: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 23, 42, 0.7)',
  },
  divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)',
  action: {
    hover: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)',
    selected: mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(15, 23, 42, 0.2)',
  },
});

const createComponents = (mode: 'light' | 'dark'): Components<Omit<Theme, "components">> => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        background: mode === 'dark' ? '#0F172A' : '#F8FAFC',
        color: mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(15, 23, 42, 0.9)',
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
      },
    },
  },
  MuiContainer: {
    defaultProps: {
      maxWidth: 'lg',
    },
    styleOverrides: {
      root: {
        padding: '0 1rem',
        '@media (min-width: 600px)': {
          padding: '0 2rem',
        },
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        borderRadius: '8px',
        fontWeight: 500,
        padding: '0.5rem 1rem',
        '@media (min-width: 600px)': {
          padding: '0.75rem 1.5rem',
        },
      },
    },
  },
});

export const createAppTheme = (mode: 'light' | 'dark'): Theme => {
  return createTheme({
    palette: createPalette(mode),
    typography: {
      fontFamily: roboto.style.fontFamily,
      h1: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 700,
        lineHeight: 1.3,
      },
      h5: {
        fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    spacing: 8,
    components: createComponents(mode),
  });
};

export const globalEffects = {
  mouseGradient: (mode: 'light' | 'dark') => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 0,
    background: mode === 'dark'
      ? 'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 51, 102, 0.15), transparent 80%)'
      : 'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 51, 102, 0.1), transparent 80%)',
    transition: 'background 0.15s ease',
  }),
  decorativeGradient: (mode: 'light' | 'dark') => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  }),
};

export const useGlobalMouseEffect = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    
    requestAnimationFrame(() => {
      currentTarget.style.setProperty('--mouse-x', `${x}px`);
      currentTarget.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  return { handleMouseMove };
};

// Custom type declarations for theme extension
declare module '@mui/material/styles' {
  interface Palette {
    customGradient: {
      primary: string;
      secondary: string;
    };
  }
  interface PaletteOptions {
    customGradient?: {
      primary: string;
      secondary: string;
    };
  }
}

const baseThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
};

export const lightTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    customGradient: {
      primary: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
      secondary: 'linear-gradient(45deg, #f50057 30%, #ff4081 90%)',
    },
  },
});

export const darkTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: '#000000',
    },
    secondary: {
      main: '#f48fb1',
      light: '#fce4ec',
      dark: '#f06292',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    customGradient: {
      primary: 'linear-gradient(45deg, #90caf9 30%, #64b5f6 90%)',
      secondary: 'linear-gradient(45deg, #f48fb1 30%, #f06292 90%)',
    },
  },
}); 