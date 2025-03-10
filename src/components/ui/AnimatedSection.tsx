'use client';

import React, { useRef, useEffect } from 'react';
import { Box, BoxProps } from '@mui/material';
// Import directly from the source files to avoid conflicts
import { useScrollAnimation } from '@/lib/animations/scrollAnimations';
import { useMouseFollow } from '@/lib/animations/mouseFollow';
import { animations } from '@/lib/animations/gsap';

export type AnimationType = 
  | 'fadeIn' 
  | 'fadeInUp' 
  | 'fadeInDown' 
  | 'fadeInLeft' 
  | 'fadeInRight' 
  | 'zoomIn' 
  | 'staggered'
  | 'none';

interface AnimatedSectionProps extends BoxProps {
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  mouseEffect?: boolean;
  children: React.ReactNode;
}

/**
 * A section component with built-in animations
 * Uses GSAP for scroll animations and mouse effects
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8,
  mouseEffect = false,
  children,
  sx,
  ...props
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Apply scroll animation if animation type is not 'none'
  if (animation !== 'none') {
    useScrollAnimation(sectionRef, {
      type: animation,
      delay,
      duration,
      once: true
    });
  }
  
  // Apply mouse follow effect if enabled
  if (mouseEffect) {
    useMouseFollow(sectionRef, {
      intensity: 0.15,
      size: 600
    });
  }
  
  return (
    <Box
      ref={sectionRef}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        ...sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

/**
 * A component that animates its children with a staggered effect
 */
export const StaggeredChildren: React.FC<{
  children: React.ReactNode;
  staggerAmount?: number;
  className?: string;
  childClassName?: string;
}> = ({
  children,
  staggerAmount = 0.1,
  className,
  childClassName = 'animate-child'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const childElements = container.querySelectorAll(`.${childClassName}`);
    
    if (childElements.length > 0) {
      animations.fadeInStagger(childElements, 0.2);
    }
    
    return () => {
      // Cleanup if needed
    };
  }, [childClassName]);
  
  // Clone children and add the animation class
  const staggeredChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Check if the child already has props and className
      const childProps = child.props || {};
      const existingClassName = childProps.className || '';
      
      return React.cloneElement(child, {
        ...childProps,
        className: `${existingClassName} ${childClassName}`.trim()
      });
    }
    return child;
  });
  
  return (
    <div ref={containerRef} className={className}>
      {staggeredChildren}
    </div>
  );
};

export default AnimatedSection; 