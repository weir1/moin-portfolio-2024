# Styling Guide

## Technology Choice
We are using Material UI (MUI) v5 as our primary UI framework, NOT Tailwind CSS. This decision is based on:
- Pre-built components
- Robust theming system
- TypeScript support
- Consistent design language

## Theme Configuration
Theme configuration is located at:
```typescript
// File: lib/theme.ts
```

## Color Scheme
Our color palette is defined as:
```typescript
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
```

## Component Structure
```
src/
└── components/
    ├── layout/        # Layout components (Header, Footer, etc.)
    ├── sections/      # Page sections (Hero, Services, etc.)
    └── ui/           # Reusable UI components
```

## Styling Best Practices
1. **Use MUI's sx prop**
   ```typescript
   <Box sx={{ 
     display: 'flex',
     gap: 2,
     p: 3
   }}>
   ```

2. **Theme Customization**
   ```typescript
   const theme = useTheme();
   <Box sx={{ 
     bgcolor: theme.palette.background.paper
   }}>
   ```

3. **Responsive Design**
   ```typescript
   <Box sx={{
     width: {
       xs: '100%',    // mobile
       sm: '50%',     // tablet
       md: '33.33%'   // desktop
     }
   }}>
   ```

4. **Custom Effects**
   ```typescript
   sx={{
     ...effects.gradientText,
     ...effects.hoverTransition
   }}
   ```

## Theme Extensions
Custom theme extensions are defined in:
```typescript
// File: lib/theme.ts
declare module '@mui/material/styles' {
  interface Palette {
    customGradient: {
      primary: string;
      secondary: string;
    };
  }
}
```

## Global Effects
Available global effects:
- `effects.gradientText`
- `effects.gradientBg`
- `effects.glassEffect`
- `effects.hoverTransition`
- `globalEffects.mouseGradient`
- `globalEffects.decorativeGradient`
- `globalEffects.sectionBackground`

## Usage Example
```typescript
// File: src/components/ui/GradientButton.tsx
import { Button, useTheme } from '@mui/material';
import { effects } from '@/lib/theme';

export const GradientButton = () => {
  const theme = useTheme();
  return (
    <Button
      sx={{
        ...effects.gradientBg,
        ...effects.hoverTransition
      }}
    >
      Click Me
    </Button>
  );
};
```

## Important Notes
1. DO NOT mix Tailwind CSS with MUI
2. Use MUI's built-in styling system consistently
3. Follow the theme configuration for colors and typography
4. Utilize the provided effects for consistent animations
5. Maintain responsive design using MUI's breakpoints 