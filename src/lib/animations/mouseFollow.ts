'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MouseFollowOptions {
  intensity?: number;
  ease?: number;
  colorLight?: string;
  colorDark?: string;
  size?: number;
  debug?: boolean;
}

/**
 * Hook to create a mouse-follow gradient effect
 * This aligns with the mouseGradient effect in the theme
 */
export const useMouseFollow = (
  containerRef: React.RefObject<HTMLElement>,
  options: MouseFollowOptions = {}
) => {
  const {
    intensity = 0.15,
    ease = 0.1,
    colorLight = 'rgba(255, 51, 102, 0.1)',
    colorDark = 'rgba(255, 51, 102, 0.15)',
    size = 600,
    debug = false
  } = options;

  const mousePosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const isActive = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    if (debug) {
      console.log('MouseFollow initialized with options:', {
        intensity,
        ease,
        colorLight,
        colorDark,
        size,
        containerElement: container
      });
    }
    
    // Create gradient element if it doesn't exist
    let gradientEl = container.querySelector('.mouse-gradient') as HTMLElement;
    if (!gradientEl) {
      gradientEl = document.createElement('div');
      gradientEl.className = 'mouse-gradient';
      gradientEl.style.position = 'absolute';
      gradientEl.style.top = '0';
      gradientEl.style.left = '0';
      gradientEl.style.right = '0';
      gradientEl.style.bottom = '0';
      gradientEl.style.pointerEvents = 'none';
      gradientEl.style.zIndex = '0';
      gradientEl.style.opacity = '0';
      
      // Set the container to relative if it's not already positioned
      const containerPosition = window.getComputedStyle(container).position;
      if (containerPosition === 'static') {
        container.style.position = 'relative';
      }
      
      container.appendChild(gradientEl);
      
      if (debug) {
        console.log('Created gradient element:', gradientEl);
      }
    }

    // Update gradient position using CSS variables
    const updateGradient = () => {
      if (!isActive.current) return;
      
      // Smooth follow with easing
      currentPosition.current.x += (mousePosition.current.x - currentPosition.current.x) * ease;
      currentPosition.current.y += (mousePosition.current.y - currentPosition.current.y) * ease;
      
      const { x, y } = currentPosition.current;
      
      // Apply the position using CSS variables
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
      
      if (debug) {
        console.log(`Mouse position: ${x}, ${y}`);
        gradientEl.textContent = `x: ${Math.round(x)}, y: ${Math.round(y)}`;
        gradientEl.style.color = 'white';
        gradientEl.style.display = 'flex';
        gradientEl.style.alignItems = 'center';
        gradientEl.style.justifyContent = 'center';
        gradientEl.style.fontSize = '12px';
        gradientEl.style.textShadow = '0 0 2px black';
      }
      
      rafId.current = requestAnimationFrame(updateGradient);
    };

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      
      if (debug) {
        console.log(`Raw mouse position: ${mousePosition.current.x}, ${mousePosition.current.y}`);
      }
      
      if (!isActive.current) {
        isActive.current = true;
        gsap.to(gradientEl, { opacity: intensity, duration: 0.3 });
        rafId.current = requestAnimationFrame(updateGradient);
        
        if (debug) {
          console.log('Mouse follow activated');
        }
      }
    };

    const handleMouseLeave = () => {
      isActive.current = false;
      gsap.to(gradientEl, { opacity: 0, duration: 0.3 });
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };

    // Add event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      // Remove gradient element
      if (gradientEl && gradientEl.parentNode) {
        gradientEl.parentNode.removeChild(gradientEl);
      }
    };
  }, [containerRef, intensity, ease, colorLight, colorDark, size, debug]);
};

/**
 * Hook to create a mouse-follow effect for any element
 */
export const useMouseFollowElement = (
  elementRef: React.RefObject<HTMLElement>,
  options: {
    intensity?: number;
    ease?: number;
    maxDistance?: number;
  } = {}
) => {
  const {
    intensity = 0.1,
    ease = 0.1,
    maxDistance = 100
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    let rafId: number | null = null;
    let isHovering = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;
      
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Limit the movement based on maxDistance
      const moveX = (distanceX / maxDistance) * intensity * rect.width;
      const moveY = (distanceY / maxDistance) * intensity * rect.height;
      
      // Apply the movement with GSAP
      gsap.to(element, {
        x: moveX,
        y: moveY,
        duration: ease,
        ease: 'power2.out'
      });
    };
    
    const handleMouseEnter = () => {
      isHovering = true;
    };
    
    const handleMouseLeave = () => {
      isHovering = false;
      
      // Reset position
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power3.out'
      });
    };
    
    // Add event listeners to document for smoother tracking
    document.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      // Reset position on cleanup
      gsap.set(element, { x: 0, y: 0 });
    };
  }, [elementRef, intensity, ease, maxDistance]);
};

export default { useMouseFollow, useMouseFollowElement }; 