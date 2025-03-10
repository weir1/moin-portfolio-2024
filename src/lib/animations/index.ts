// Import individual modules
import gsap from 'gsap';
import { 
  animations, 
  defaultDuration, 
  defaultEase, 
  defaultStagger,
  useScrollAnimation as useGsapScrollAnimation,
  useSmoothScroll,
  useTextReveal
} from './gsap';

import {
  useMouseFollow,
  useMouseFollowElement
} from './mouseFollow';

import {
  useScrollAnimation,
  useParallax,
  useSectionAnimation,
  type ScrollAnimationType
} from './scrollAnimations';

// Re-export named exports
export {
  // GSAP constants and utilities
  animations,
  defaultDuration,
  defaultEase,
  defaultStagger,
  useGsapScrollAnimation,
  useSmoothScroll,
  useTextReveal,
  
  // Mouse follow animations
  useMouseFollow,
  useMouseFollowElement,
  
  // Scroll animations
  useScrollAnimation,
  useParallax,
  useSectionAnimation,
};

// Re-export types
export type { ScrollAnimationType };

// Combined exports
export default {
  // GSAP core
  gsap,
  
  // GSAP utilities
  animations,
  defaultDuration,
  defaultEase,
  defaultStagger,
  useGsapScrollAnimation,
  useSmoothScroll,
  useTextReveal,
  
  // Mouse follow utilities
  useMouseFollow,
  useMouseFollowElement,
  
  // Scroll animation utilities
  useScrollAnimation,
  useParallax,
  useSectionAnimation,
  
  // Additional utility functions
  
  // Initialize all GSAP animations and plugins
  initializeAnimations: () => {
    // This function can be called in a layout component to ensure
    // all GSAP plugins are registered and ready to use
    if (typeof window !== 'undefined') {
      // Any additional initialization can be done here
      console.log('GSAP animations initialized');
    }
  }
}; 