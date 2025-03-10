# Theme Documentation

## Color Scheme

Our portfolio uses a modern, vibrant color scheme that works beautifully in both dark and light modes. The color system is designed to provide excellent contrast, visual hierarchy, and accessibility.

### Primary Colors

```css
Primary (Pink/Red):
- Main: #FF3366
- Light: #FF6B93
- Dark: #CC1A47

Secondary (Orange):
- Main: #FF9933
- Light: #FFB366
- Dark: #CC7A29
```

### Dark Mode Colors

```css
Background:
- Default: #0F172A (Deep Navy)
- Paper: #1E293B (Lighter Navy)
- Gradient: linear-gradient(135deg, #0F172A 0%, #1E293B 100%)

Text:
- Primary: rgba(255, 255, 255, 0.9)
- Secondary: rgba(255, 255, 255, 0.7)
```

### Light Mode Colors

```css
Background:
- Default: #F8FAFC (Light Gray)
- Paper: #FFFFFF (White)
- Gradient: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)

Text:
- Primary: rgba(15, 23, 42, 0.9)
- Secondary: rgba(15, 23, 42, 0.7)
```

## Theme Features

### 1. Automatic Theme Detection
- Automatically detects system color scheme preference
- Persists user theme choice in localStorage
- Provides smooth transition between themes

### 2. Component Styling
All components are styled to work beautifully in both light and dark modes:

#### Buttons
- Contained: Gradient background with hover effect
- Outlined: Transparent with themed border
- Text: Clean with hover color change

#### Cards
- Glass morphism effect
- Subtle borders
- Hover lift animation

#### Typography
- Consistent color hierarchy
- Gradient text options
- Responsive font sizes

### 3. Effects & Animations

#### Glass Morphism
```css
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

#### Gradients
```css
/* Text Gradient */
.gradient-text {
  background: linear-gradient(135deg, #FF3366 0%, #FF9933 100%);
  -webkit-background-clip: text;
  color: transparent;
}

/* Background Gradient */
.gradient-bg {
  background: linear-gradient(135deg, #FF3366 0%, #FF9933 100%);
}
```

#### Animations
- Fade-in animations for content
- Hover lift effects
- Smooth transitions
- Mouse-follow effects

### 4. Utility Classes

```css
/* Transitions */
.transition-all {
  transition: all 0.3s ease-in-out;
}

/* Hover Effects */
.hover-lift:hover {
  transform: translateY(-4px);
}

/* Animations */
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
```

## Usage Examples

### 1. Theme Context

```typescript
import { useTheme } from '@/providers/ThemeProvider';

function MyComponent() {
  const { mode, toggleTheme } = useTheme();
  
  return (
    <div>
      Current theme: {mode}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### 2. Conditional Styling

```typescript
const styles = {
  background: mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 23, 42, 0.03)',
  color: mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(15, 23, 42, 0.9)',
};
```

### 3. Using CSS Variables

```css
.my-element {
  color: var(--primary);
  background: var(--dark-bg);
}
```

## Best Practices

1. Always use the theme context for conditional styling
2. Utilize CSS variables for consistent colors
3. Test components in both light and dark modes
4. Ensure sufficient contrast ratios for accessibility
5. Use gradients and glass effects sparingly
6. Implement smooth transitions between themes
7. Consider color blindness and accessibility