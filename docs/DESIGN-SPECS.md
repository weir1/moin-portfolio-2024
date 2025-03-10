# Design Specifications

## Brand Colors
```css
/* Primary Colors */
--primary-dark: #1A1A1A     /* Main background */
--primary-slate: #2A2A2A    /* Secondary background */
--accent-blue: #4A9FFF      /* Primary accent */
--accent-teal: #2DD4BF      /* Secondary accent */

/* Text Colors */
--text-primary: #FFFFFF     /* Primary text */
--text-secondary: #94A3B8   /* Secondary text */
--text-accent: #4A9FFF      /* Accent text */

/* UI Elements */
--card-bg: rgba(255, 255, 255, 0.05)
--nav-bg: rgba(26, 26, 26, 0.8)
--button-primary: #4A9FFF
--button-hover: #2DD4BF
```

## Typography
```css
/* Headings */
font-family: 'Inter', sans-serif
h1: 48px/1.2
h2: 36px/1.3
h3: 24px/1.4
h4: 20px/1.5

/* Body */
font-family: 'Inter', sans-serif
body: 16px/1.6
small: 14px/1.6
```

## Layout Structure

### 1. Homepage
```markdown
A. Hero Section
   - Full-screen height
   - Centered content
   - Animated text reveal
   - Key metrics display
   - CTA button
   
B. Services Grid
   - 3-column layout
   - Glass-effect cards
   - Hover animations
   - Icon + Text
   
C. Results Section
   - 2-column layout
   - Animated counters
   - Client logos
   - Testimonials slider
```

### 2. Case Studies
```markdown
A. Grid Layout
   - 2-column masonry
   - Hover effect cards
   - Category filters
   - Quick metrics

B. Case Study Cards
   - Featured image
   - Client name
   - Key metric
   - Category tag
```

### 3. Service Pages
```markdown
A. Service Hero
   - Service title
   - Key benefits
   - CTA button
   - Trust signals

B. Process Steps
   - Timeline layout
   - Icon illustrations
   - Step descriptions
   - Progress indicators
```

## Component Library

### 1. Navigation
```markdown
A. Header
   - Fixed position
   - Glass effect
   - Logo
   - Menu items
   - CTA button

B. Mobile Menu
   - Slide-in panel
   - Animated links
   - Social icons
   - Contact info
```

### 2. Cards
```markdown
A. Service Cards
   - Glass background
   - Icon
   - Title
   - Description
   - Arrow link

B. Case Study Cards
   - Image
   - Client
   - Results
   - Category
```

### 3. Buttons
```markdown
A. Primary Button
   - Blue background
   - White text
   - Hover effect
   - Loading state

B. Secondary Button
   - Transparent
   - Border
   - Hover fill
```

### 4. Metrics Display
```markdown
A. Counter Cards
   - Large number
   - Label
   - Animation
   - Icon

B. Results Grid
   - 4-column
   - Animated
   - Icon + Number
   - Description
```

## Animation Specifications

### 1. Page Transitions
```markdown
- Fade in/out
- Slide up content
- Smooth navigation
- Loading states
```

### 2. Scroll Animations
```markdown
- Reveal on scroll
- Parallax effects
- Counter animations
- Text fade-in
```

### 3. Hover Effects
```markdown
- Scale transform
- Color transition
- Opacity change
- Background blur
```

## Responsive Breakpoints
```css
/* Breakpoints */
--mobile: 375px
--tablet: 768px
--laptop: 1024px
--desktop: 1440px
```

## Page-Specific Elements

### 1. Homepage Hero
```markdown
Components:
- Animated text
- Metrics display
- CTA button
- Background effect
```

### 2. Case Study Layout
```markdown
Components:
- Hero image
- Client info
- Process steps
- Results display
```

### 3. Contact Section
```markdown
Components:
- Form fields
- Social links
- Location map
- Availability
```

## Interactive Elements

### 1. Forms
```markdown
Style:
- Minimal design
- Floating labels
- Validation states
- Success/error messages
```

### 2. Filters
```markdown
Style:
- Pill buttons
- Active states
- Smooth transitions
- Clear selection
```

### 3. Tooltips
```markdown
Style:
- Glass effect
- Arrow pointer
- Fade animation
- Position aware
```

## Next Steps

1. Create Homepage Mockup
2. Design Component Library
3. Build Case Study Template
4. Design Service Pages
5. Mobile Responsive Layouts