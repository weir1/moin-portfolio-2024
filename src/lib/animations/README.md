# Animation Library

This library provides a collection of animation utilities for React components using GSAP. It includes scroll animations, mouse follow effects, and general animation utilities.

## Installation

The animation library is already integrated into the project. Make sure you have the required dependencies:

```bash
npm install gsap
```

## Usage

### Basic Import

```tsx
import { animations, useScrollAnimation } from '@/lib/animations';
```

### GSAP Animations

#### Basic Animations

```tsx
import { animations } from '@/lib/animations';
import { useRef, useEffect } from 'react';

const MyComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (elementRef.current) {
      // Fade in animation
      animations.fadeIn(elementRef.current);
      
      // Or with delay
      animations.fadeIn(elementRef.current, 0.3);
    }
  }, []);
  
  return <div ref={elementRef}>Animated content</div>;
};
```

#### Text Reveal Animation

```tsx
import { useTextReveal } from '@/lib/animations';
import { useRef } from 'react';

const TextRevealComponent = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  // Apply text reveal animation
  useTextReveal(textRef);
  
  return <h1 ref={textRef}>This text will reveal word by word</h1>;
};
```

#### Smooth Scroll

```tsx
import { useSmoothScroll } from '@/lib/animations';

const ScrollComponent = () => {
  const { scrollTo } = useSmoothScroll();
  
  const handleClick = () => {
    // Scroll to element with ID "section-2"
    scrollTo('#section-2', { duration: 1.5, offset: -50 });
  };
  
  return <button onClick={handleClick}>Scroll to Section 2</button>;
};
```

### Scroll Animations

#### Basic Scroll Animation

```tsx
import { useScrollAnimation } from '@/lib/animations';
import { useRef } from 'react';

const ScrollAnimatedComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Apply scroll animation
  useScrollAnimation(elementRef, {
    type: 'fadeInUp',
    duration: 0.8,
    delay: 0.2
  });
  
  return <div ref={elementRef}>This content will animate when scrolled into view</div>;
};
```

#### Parallax Effect

```tsx
import { useParallax } from '@/lib/animations';
import { useRef } from 'react';

const ParallaxComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Apply parallax effect
  useParallax(elementRef, {
    speed: 0.5,
    direction: 'vertical'
  });
  
  return <div ref={elementRef} className="parallax-element">Parallax content</div>;
};
```

#### Section Animation

```tsx
import { useSectionAnimation } from '@/lib/animations';
import { useRef } from 'react';

const SectionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animate sections within the container
  useSectionAnimation(containerRef, {
    sectionSelector: '.section',
    duration: 0.8,
    stagger: 0.2
  });
  
  return (
    <div ref={containerRef}>
      <div className="section">Section 1</div>
      <div className="section">Section 2</div>
      <div className="section">Section 3</div>
    </div>
  );
};
```

### Mouse Follow Effects

#### Basic Mouse Follow

```tsx
import { useMouseFollow } from '@/lib/animations';
import { useRef } from 'react';

const MouseFollowComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Apply mouse follow effect
  useMouseFollow(containerRef, {
    intensity: 0.15,
    colorLight: 'rgba(255, 51, 102, 0.1)',
    colorDark: 'rgba(255, 51, 102, 0.15)',
    size: 600
  });
  
  return (
    <div ref={containerRef} className="relative min-h-[300px] p-8">
      <h2>Hover over this area</h2>
      <p>The gradient will follow your mouse</p>
    </div>
  );
};
```

#### Element Mouse Follow

```tsx
import { useMouseFollowElement } from '@/lib/animations';
import { useRef } from 'react';

const MouseFollowElementComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Apply mouse follow effect to an element
  useMouseFollowElement(elementRef, {
    intensity: 0.1,
    ease: 0.1,
    maxDistance: 100
  });
  
  return (
    <div 
      ref={elementRef} 
      className="bg-primary/10 p-4 rounded-lg w-64 h-64 flex items-center justify-center"
    >
      This element will follow your mouse
    </div>
  );
};
```

## AnimatedSection Component

The library includes an `AnimatedSection` component that makes it easy to create animated sections:

```tsx
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const MyPage = () => {
  return (
    <div>
      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <h2>This section will fade in from below</h2>
        <p>With all its children</p>
      </AnimatedSection>
      
      <AnimatedSection animation="fadeInLeft" delay={0.4}>
        <h2>This section will fade in from the left</h2>
        <p>With all its children</p>
      </AnimatedSection>
    </div>
  );
};
```

## Available Animation Types

- `fadeIn`: Simple fade in
- `fadeInUp`: Fade in while moving up
- `fadeInDown`: Fade in while moving down
- `fadeInLeft`: Fade in while moving from left
- `fadeInRight`: Fade in while moving from right
- `zoomIn`: Fade in while scaling up
- `staggered`: Animate children elements with a stagger effect

## Customization

Most animation hooks accept options to customize the animation behavior:

- `duration`: Animation duration in seconds
- `delay`: Delay before animation starts
- `ease`: GSAP easing function (e.g., 'power3.out')
- `start`: ScrollTrigger start position (e.g., 'top 80%')
- `end`: ScrollTrigger end position
- `scrub`: Whether to scrub the animation with scroll
- `markers`: Show ScrollTrigger markers (for debugging)

## Initialization

To ensure all GSAP plugins are properly registered, you can call the initialization function in your layout component:

```tsx
import animationUtils from '@/lib/animations';
import { useEffect } from 'react';

const RootLayout = ({ children }) => {
  useEffect(() => {
    animationUtils.initializeAnimations();
  }, []);
  
  return <div>{children}</div>;
};
``` 