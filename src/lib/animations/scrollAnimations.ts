'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure ScrollTrigger is registered
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Types of scroll animations
 */
export type ScrollAnimationType = 
  | 'fadeIn' 
  | 'fadeInUp' 
  | 'fadeInDown' 
  | 'fadeInLeft' 
  | 'fadeInRight' 
  | 'zoomIn' 
  | 'staggered';

interface ScrollAnimationOptions {
  type?: ScrollAnimationType;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  staggerAmount?: number;
  staggerChildren?: string;
  threshold?: number;
  once?: boolean;
}

/**
 * Hook to apply scroll animations to elements
 */
export const useScrollAnimation = (
  ref: React.RefObject<HTMLElement>,
  options: ScrollAnimationOptions = {}
) => {
  const {
    type = 'fadeIn',
    duration = 0.8,
    delay = 0,
    ease = 'power3.out',
    start = 'top 80%',
    end = 'bottom 20%',
    scrub = false,
    markers = false,
    staggerAmount = 0.1,
    staggerChildren = '.animate-child',
    threshold = 0.2,
    once = true
  } = options;

  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    let animation: gsap.core.Timeline | gsap.core.Tween;
    let trigger: ScrollTrigger;
    
    // Define animation based on type
    switch (type) {
      case 'fadeIn':
        animation = gsap.fromTo(
          element,
          { opacity: 0 },
          { opacity: 1, duration, delay, ease }
        );
        break;
        
      case 'fadeInUp':
        animation = gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration, delay, ease }
        );
        break;
        
      case 'fadeInDown':
        animation = gsap.fromTo(
          element,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration, delay, ease }
        );
        break;
        
      case 'fadeInLeft':
        animation = gsap.fromTo(
          element,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration, delay, ease }
        );
        break;
        
      case 'fadeInRight':
        animation = gsap.fromTo(
          element,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration, delay, ease }
        );
        break;
        
      case 'zoomIn':
        animation = gsap.fromTo(
          element,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration, delay, ease }
        );
        break;
        
      case 'staggered':
        const children = element.querySelectorAll(staggerChildren);
        if (children.length === 0) {
          // Fallback to fadeIn if no children
          animation = gsap.fromTo(
            element,
            { opacity: 0 },
            { opacity: 1, duration, delay, ease }
          );
        } else {
          const tl = gsap.timeline({ delay });
          tl.fromTo(
            children,
            { opacity: 0, y: 20 },
            { 
              opacity: 1, 
              y: 0, 
              duration, 
              ease, 
              stagger: staggerAmount 
            }
          );
          animation = tl;
        }
        break;
        
      default:
        animation = gsap.fromTo(
          element,
          { opacity: 0 },
          { opacity: 1, duration, delay, ease }
        );
    }
    
    // Pause the animation initially
    animation.pause();
    
    // Create ScrollTrigger
    trigger = ScrollTrigger.create({
      trigger: element,
      start,
      end,
      scrub,
      markers,
      animation,
      toggleActions: once ? 'play none none none' : 'play reverse play reverse',
    });
    
    // Cleanup
    return () => {
      animation.kill();
      trigger.kill();
    };
  }, [
    ref, 
    type, 
    duration, 
    delay, 
    ease, 
    start, 
    end, 
    scrub, 
    markers, 
    staggerAmount, 
    staggerChildren,
    once
  ]);
};

/**
 * Hook to create a parallax effect on scroll
 */
export const useParallax = (
  ref: React.RefObject<HTMLElement>,
  options: {
    speed?: number;
    direction?: 'vertical' | 'horizontal';
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
  } = {}
) => {
  const {
    speed = 0.5,
    direction = 'vertical',
    start = 'top bottom',
    end = 'bottom top',
    scrub = true,
    markers = false
  } = options;

  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    let trigger: ScrollTrigger;
    
    // Calculate movement amount based on speed
    const movement = direction === 'vertical' 
      ? { y: `${speed * 100}%` } 
      : { x: `${speed * 100}%` };
    
    // Create animation
    const animation = gsap.fromTo(
      element,
      direction === 'vertical' ? { y: 0 } : { x: 0 },
      movement
    );
    
    // Create ScrollTrigger
    trigger = ScrollTrigger.create({
      trigger: element,
      start,
      end,
      scrub,
      markers,
      animation
    });
    
    // Cleanup
    return () => {
      animation.kill();
      trigger.kill();
    };
  }, [ref, speed, direction, start, end, scrub, markers]);
};

/**
 * Hook to create a section-by-section scroll animation
 */
export const useSectionAnimation = (
  containerRef: React.RefObject<HTMLElement>,
  options: {
    sectionSelector?: string;
    duration?: number;
    stagger?: number;
    ease?: string;
    threshold?: number;
  } = {}
) => {
  const {
    sectionSelector = 'section',
    duration = 1,
    stagger = 0.2,
    ease = 'power3.out',
    threshold = 0.2
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const sections = container.querySelectorAll(sectionSelector);
    const triggers: ScrollTrigger[] = [];
    
    if (sections.length === 0) return;
    
    // Create animations for each section
    sections.forEach((section, index) => {
      // Set initial state
      gsap.set(section, { opacity: 0, y: 30 });
      
      // Create animation
      const animation = gsap.to(section, {
        opacity: 1,
        y: 0,
        duration,
        ease,
        paused: true,
        delay: index * stagger * 0.1 // Small delay between sections
      });
      
      // Create trigger
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        onEnter: () => animation.play(),
        onLeaveBack: () => animation.reverse(),
        markers: false,
      });
      
      triggers.push(trigger);
    });
    
    // Cleanup
    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, [containerRef, sectionSelector, duration, stagger, ease, threshold]);
};

export default {
  useScrollAnimation,
  useParallax,
  useSectionAnimation
}; 