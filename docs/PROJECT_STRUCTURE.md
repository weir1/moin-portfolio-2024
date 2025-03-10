# Project Structure Documentation

## Directory Structure
```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── (routes)/         # Page routes (services, portfolio, contact)
│   ├── layout.tsx        # Root layout with providers
│   ├── page.tsx          # Home page
│   ├── loading.tsx       # Loading component
│   └── not-found.tsx     # 404 page
├── components/
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Main header with navigation
│   │   ├── Footer.tsx    # Footer component
│   │   └── MobileMenu.tsx# Mobile navigation menu
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   └── ServicesSection.tsx
│   ├── ui/              # Reusable UI components
│   │   └── GradientButton.tsx
│   └── icons/           # Icon exports
├── lib/                 # Utilities and configurations
│   ├── theme.ts        # Theme configuration
│   └── store/          # State management
│       └── themeStore.ts# Theme state management
└── types/              # TypeScript type definitions
```

## Theme Implementation

### 1. Theme Configuration (`src/lib/theme.ts`)
- Defines theme colors and effects
- Creates light/dark themes
- Exports utility effects (gradient, glass, hover)

### 2. Theme State Management (`src/lib/store/themeStore.ts`)
```typescript
interface ThemeState {
  theme: PaletteMode;
  toggleTheme: () => void;
  setTheme: (theme: PaletteMode) => void;
}
```

### 3. Theme Provider (`src/app/providers.tsx`)
- Wraps app with MUI ThemeProvider
- Uses theme state from themeStore
- Applies theme changes globally

## How to Avoid 404 Issues

1. **File Structure Requirements:**
   - Always include `layout.tsx` in route groups
   - Keep `page.tsx` as the index file
   - Add `loading.tsx` for suspense
   - Add `not-found.tsx` for 404 handling

2. **Route Organization:**
   ```
   src/app/
   ├── (routes)/
   │   ├── services/
   │   │   └── page.tsx
   │   ├── portfolio/
   │   │   └── page.tsx
   │   └── contact/
   │       └── page.tsx
   ```

3. **Best Practices:**
   - Use `'use client'` directive for client components
   - Keep providers in root layout
   - Use proper Next.js Link components
   - Implement proper loading states

## Theme Toggle Implementation

1. **Header Component:**
   ```typescript
   import { useStore } from '@/lib/store/themeStore';
   import { IconButton } from '@mui/material';
   import { DarkMode, LightMode } from '@mui/icons-material';

   // Inside Header component:
   const { theme, toggleTheme } = useStore();
   
   <IconButton onClick={toggleTheme}>
     {theme === 'dark' ? <LightMode /> : <DarkMode />}
   </IconButton>
   ```

2. **Usage:**
   - Theme toggle appears in header
   - State persists in localStorage
   - Affects all themed components

## Common Issues & Solutions

1. **404 Errors:**
   - Ensure correct file naming (`page.tsx`)
   - Check route group organization
   - Verify import paths are correct

2. **Theme Not Applying:**
   - Check providers wrapping
   - Verify store initialization
   - Ensure proper component exports

3. **Component Not Found:**
   - Use correct import paths
   - Check file existence
   - Verify export statements 