# Theme Documentation

## Modern Slate Theme

Our chosen color scheme focuses on a professional, modern dark theme that ensures excellent readability and visual appeal.

### Primary Colors
```css
--primary-dark: #1A1A1A     /* Main background */
--primary-slate: #2A2A2A    /* Secondary background */
--accent-blue: #4A9FFF      /* Primary accent */
--accent-teal: #2DD4BF      /* Secondary accent */
```

### Text Colors
```css
--text-primary: #FFFFFF     /* Primary text */
--text-secondary: #94A3B8   /* Secondary text */
--text-accent: #4A9FFF      /* Accent text */
```

### Gradient Colors
```css
--gradient-primary: linear-gradient(135deg, #4A9FFF 0%, #2DD4BF 100%)
--gradient-dark: linear-gradient(180deg, #1A1A1A 0%, #2A2A2A 100%)
```

### UI Element Colors
```css
--card-bg: rgba(255, 255, 255, 0.05)    /* Card background with glass effect */
--nav-bg: rgba(26, 26, 26, 0.8)         /* Navigation background */
--button-primary: #4A9FFF                /* Primary button */
--button-hover: #2DD4BF                  /* Button hover state */
```

## Glass Effect Properties
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## Usage Guidelines

### Text Hierarchy
- Headlines: `--text-primary`
- Body Text: `--text-secondary`
- CTAs & Links: `--accent-blue`
- Highlights: `--accent-teal`

### Component Styling
1. **Cards**
   - Background: `--card-bg`
   - Border: 1px solid rgba(255, 255, 255, 0.1)
   - Glass effect on hover

2. **Buttons**
   - Primary: `--button-primary`
   - Hover: `--button-hover`
   - Text: `--text-primary`

3. **Navigation**
   - Background: `--nav-bg`
   - Text: `--text-primary`
   - Active: `--accent-blue`

4. **Section Backgrounds**
   - Main: `--primary-dark`
   - Alternate: `--primary-slate`
   - Feature sections: Gradient overlay

## Animation Guidelines

### Color Transitions
```css
.transition-colors {
  transition: all 0.3s ease-in-out;
}
```

### Hover Effects
```css
.hover-effect:hover {
  background: var(--gradient-primary);
  transform: translateY(-2px);
}
```

### Glass Morphism
```css
.glass-morph {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## Material UI Integration

### Theme Configuration
```javascript
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4A9FFF',
      light: '#2DD4BF',
      dark: '#1A1A1A',
    },
    secondary: {
      main: '#2DD4BF',
    },
    background: {
      default: '#1A1A1A',
      paper: '#2A2A2A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#94A3B8',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    // Add more component customizations
  },
});
```