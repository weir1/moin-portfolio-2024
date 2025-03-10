# Troubleshooting Guide

This document contains solutions to common issues encountered in the Moin Portfolio project.

## Table of Contents

1. [Animation Issues](#animation-issues)
2. [Text Visibility Issues](#text-visibility-issues)

## Animation Issues

### Mouse Follow Animation Not Working

**Issue**: Mouse follow gradient effect not visible when moving the cursor.

**Solution**:

1. Ensure the `data-theme` attribute is properly set on the HTML element:
   ```typescript
   // In src/app/providers.tsx
   useEffect(() => {
     document.documentElement.setAttribute('data-theme', theme);
   }, [theme]);
   ```

2. Add mouse move event listener to track cursor position:
   ```typescript
   // In src/components/layout/Layout.tsx
   useEffect(() => {
     const handleMouseMove = (e: MouseEvent) => {
       document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
       document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
     };
     
     document.addEventListener('mousemove', handleMouseMove);
     
     return () => {
       document.removeEventListener('mousemove', handleMouseMove);
     };
   }, []);
   ```

3. Update CSS to use CSS variables for positioning:
   ```css
   /* In src/app/globals.css */
   .mouse-gradient {
     background: radial-gradient(
       800px at var(--mouse-x, 50%) var(--mouse-y, 50%),
       rgba(255, 51, 102, 0.3),
       transparent 80%
     );
   }
   ```

4. Add proper z-index and positioning:
   ```css
   .mouse-gradient {
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     pointer-events: none;
     z-index: 1;
   }
   ```

### Scroll Animations Not Triggering

**Issue**: Elements not animating when scrolled into view.

**Solution**:

1. Ensure GSAP and ScrollTrigger are properly registered:
   ```typescript
   // In src/lib/animations/gsap.ts
   if (typeof window !== 'undefined') {
     gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
   }
   ```

2. Initialize animations in the layout component:
   ```typescript
   // In src/components/layout/Layout.tsx
   useEffect(() => {
     animationUtils.initializeAnimations();
   }, []);
   ```

3. Use the AnimatedSection component with proper animation type:
   ```tsx
   <AnimatedSection animation="fadeInUp" delay={0.2}>
     <Typography>Content to animate</Typography>
   </AnimatedSection>
   ```

## Text Visibility Issues

### Gradient Text Not Visible

**Issue**: Text with gradient effect not visible, especially in dark mode.

**Solution**:

1. Update the gradient-text CSS class:
   ```css
   /* In src/app/globals.css */
   .gradient-text {
     background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     background-clip: text;
     color: var(--primary); /* Fallback */
     position: relative;
     display: inline-block;
     text-shadow: 0 0 1px rgba(255, 51, 102, 0.1);
   }

   /* Dark mode specific styles */
   [data-theme="dark"] .gradient-text {
     text-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
   }

   /* Light mode specific styles */
   [data-theme="light"] .gradient-text {
     text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
   }
   ```

2. Add fallback color for headings:
   ```css
   h1, h2, h3, h4, h5, h6 {
     color: var(--primary);
   }
   ```

3. Use the gradient-text class instead of complex inline styles:
   ```tsx
   <Typography 
     variant="h1" 
     className="gradient-text"
     gutterBottom
   >
     Full-Stack Digital Growth Expert
   </Typography>
   ```

4. If using text reveal animations, ensure they preserve styling:
   ```typescript
   // In src/lib/animations/gsap.ts (useTextReveal hook)
   // Save the original styles
   const computedStyle = window.getComputedStyle(element);
   const originalColor = computedStyle.color;
   const originalBackground = computedStyle.background;
   const originalBackgroundClip = computedStyle.backgroundClip;
   const originalWebkitBackgroundClip = computedStyle.webkitBackgroundClip;
   const originalWebkitTextFillColor = computedStyle.webkitTextFillColor;
   
   // Apply original styles to inner span
   innerSpan.style.color = originalColor;
   innerSpan.style.background = originalBackground;
   innerSpan.style.backgroundClip = originalBackgroundClip;
   innerSpan.style.webkitBackgroundClip = originalWebkitBackgroundClip;
   innerSpan.style.webkitTextFillColor = originalWebkitTextFillColor;
   ```

### Text Animation Breaking Styling

**Issue**: Text reveal animations causing gradient text to disappear.

**Solution**:

1. Simplify the animation approach:
   ```tsx
   // In src/components/sections/HeroSection.tsx
   <AnimatedSection animation="fadeIn">
     <Typography
       variant="h1"
       className="gradient-text"
       gutterBottom
     >
       Full-Stack Digital Growth Expert
     </Typography>
   </AnimatedSection>
   ```

2. Use simpler animations for important text elements:
   - Use `fadeIn` instead of complex text reveal animations
   - Use CSS classes instead of inline styles
   - Add proper fallbacks for all styling properties

## Permission Issues

### EPERM Error When Running Development Server

**Issue**: Error `[Error: EPERM: operation not permitted, open 'D:\MoinApps\MoinPortfolio\.next\trace']` when running `npm run dev`.

**Solution**:

1. Close any processes that might be using the files:
   - Close VS Code or any other editor that might be accessing the files
   - Close any running Node.js processes

2. Delete the `.next` folder and try again:
   ```powershell
   Remove-Item -Recurse -Force .next
   npm run dev
   ```

3. Run the development server with administrator privileges:
   - Right-click on PowerShell and select "Run as administrator"
   - Navigate to your project directory
   - Run `npm run dev`

4. If the issue persists, try restarting your computer to release any locked files. 