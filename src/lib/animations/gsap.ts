'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect, useRef, MutableRefObject } from 'react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

// Default animation settings
export const defaultDuration = 0.8;
export const defaultEase = 'power3.out';
export const defaultStagger = 0.1;

/**
 * Animation presets for common elements
 */
export const animations = {
  fadeIn: (target: gsap.TweenTarget, delay: number = 0) => {
    return gsap.fromTo(
      target,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: defaultDuration, 
        ease: defaultEase, 
        delay 
      }
    );
  },
  
  fadeInStagger: (target: gsap.TweenTarget, delay: number = 0) => {
    return gsap.fromTo(
      target,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: defaultDuration, 
        ease: defaultEase, 
        stagger: defaultStagger, 
        delay 
      }
    );
  },
  
  scaleIn: (target: gsap.TweenTarget, delay: number = 0) => {
    return gsap.fromTo(
      target,
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: defaultDuration, 
        ease: defaultEase, 
        delay 
      }
    );
  },
  
  slideInLeft: (target: gsap.TweenTarget, delay: number = 0) => {
    return gsap.fromTo(
      target,
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: defaultDuration, 
        ease: defaultEase, 
        delay 
      }
    );
  },
  
  slideInRight: (target: gsap.TweenTarget, delay: number = 0) => {
    return gsap.fromTo(
      target,
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: defaultDuration, 
        ease: defaultEase, 
        delay 
      }
    );
  },
  
  // Hover animation for cards and buttons
  hoverEffect: (target: gsap.TweenTarget) => {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) return;
    
    const enterAnimation = () => {
      gsap.to(element, { 
        y: -5, 
        scale: 1.03, 
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)', 
        duration: 0.3, 
        ease: 'power2.out' 
      });
    };
    
    const leaveAnimation = () => {
      gsap.to(element, { 
        y: 0, 
        scale: 1, 
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)', 
        duration: 0.3, 
        ease: 'power2.out' 
      });
    };
    
    if (element instanceof Element) {
      element.addEventListener('mouseenter', enterAnimation);
      element.addEventListener('mouseleave', leaveAnimation);
      
      // Return cleanup function
      return () => {
        element.removeEventListener('mouseenter', enterAnimation);
        element.removeEventListener('mouseleave', leaveAnimation);
      };
    }
  }
};

/**
 * Hook for scroll-triggered animations
 */
export const useScrollAnimation = (
  ref: MutableRefObject<HTMLElement | null>,
  animation: (element: gsap.TweenTarget) => gsap.core.Tween,
  options: {
    trigger?: string | Element;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
    toggleActions?: string;
  } = {}
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const defaults = {
      trigger: ref.current,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: false,
      markers: false,
      toggleActions: 'play none none none'
    };
    
    const mergedOptions = { ...defaults, ...options };
    
    const tween = animation(ref.current);
    tween.pause();
    
    const scrollTrigger = ScrollTrigger.create({
      ...mergedOptions,
      animation: tween,
    });
    
    return () => {
      scrollTrigger.kill();
      tween.kill();
    };
  }, [ref, animation, options]);
};

/**
 * Hook for smooth scrolling to elements
 */
export const useSmoothScroll = () => {
  const scrollTo = (target: string | Element, options: { duration?: number; offset?: number } = {}) => {
    const { duration = 1, offset = 0 } = options;
    
    gsap.to(window, {
      duration,
      scrollTo: {
        y: target,
        offsetY: offset
      },
      ease: 'power3.inOut'
    });
  };
  
  return { scrollTo };
};

/**
 * Hook for text reveal animation
 */
export const useTextReveal = (ref: MutableRefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!ref.current) return;
    
    // Split text into words and wrap each word in a span
    const element = ref.current;
    const text = element.textContent || '';
    const words = text.split(' ');
    
    // Save the original styles
    const computedStyle = window.getComputedStyle(element);
    const originalColor = computedStyle.color;
    const originalBackground = computedStyle.background;
    const originalBackgroundClip = computedStyle.backgroundClip;
    const originalWebkitBackgroundClip = computedStyle.webkitBackgroundClip;
    const originalWebkitTextFillColor = computedStyle.webkitTextFillColor;
    
    element.innerHTML = '';
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.style.display = 'inline-block';
      span.style.overflow = 'hidden';
      
      const innerSpan = document.createElement('span');
      innerSpan.style.display = 'inline-block';
      innerSpan.style.transform = 'translateY(100%)';
      innerSpan.textContent = word;
      
      // Apply original styles to inner span
      innerSpan.style.color = originalColor;
      innerSpan.style.background = originalBackground;
      innerSpan.style.backgroundClip = originalBackgroundClip;
      innerSpan.style.webkitBackgroundClip = originalWebkitBackgroundClip;
      innerSpan.style.webkitTextFillColor = originalWebkitTextFillColor;
      
      span.appendChild(innerSpan);
      element.appendChild(span);
      
      if (index < words.length - 1) {
        element.appendChild(document.createTextNode(' '));
      }
    });
    
    // Animate each word
    const wordSpans = element.querySelectorAll('span > span');
    gsap.to(wordSpans, {
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      }
    });
    
    return () => {
      // Cleanup if needed
    };
  }, [ref]);
};

export default gsap; 