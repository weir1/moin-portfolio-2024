'use client';

import { useRef } from 'react';
import { 
  useScrollAnimation, 
  useMouseFollow, 
  useTextReveal,
  useParallax,
  animations
} from '@/lib/animations';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useEffect } from 'react';

/**
 * Example component demonstrating various animation techniques
 * This component is for demonstration purposes only
 */
export const AnimationExample = () => {
  // Refs for different animation techniques
  const fadeInRef = useRef<HTMLDivElement>(null);
  const textRevealRef = useRef<HTMLHeadingElement>(null);
  const mouseFollowRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // Apply scroll animation to the fadeIn element
  useScrollAnimation(fadeInRef, {
    type: 'fadeInUp',
    duration: 0.8,
    delay: 0.2
  });
  
  // Apply text reveal animation
  useTextReveal(textRevealRef);
  
  // Apply mouse follow effect
  useMouseFollow(mouseFollowRef, {
    intensity: 0.5,
    colorLight: 'rgba(100, 100, 255, 0.3)',
    colorDark: 'rgba(100, 100, 255, 0.4)',
    size: 600,
    debug: true
  });
  
  // Apply parallax effect
  useParallax(parallaxRef, {
    speed: 0.3,
    direction: 'vertical'
  });
  
  // Apply hover effect to an element using GSAP
  useEffect(() => {
    const cardElement = document.querySelector('.hover-card');
    if (cardElement) {
      const cleanup = animations.hoverEffect(cardElement);
      return cleanup;
    }
  }, []);
  
  return (
    <div className="space-y-24 py-12">
      {/* Text reveal animation */}
      <section className="text-center py-12">
        <h2 ref={textRevealRef} className="text-4xl font-bold mb-4">
          Animation Examples & Techniques
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          This component demonstrates various animation techniques using our custom animation library.
        </p>
      </section>
      
      {/* Scroll animation */}
      <section className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Scroll Animation</h3>
        <div 
          ref={fadeInRef} 
          className="bg-card p-8 rounded-lg shadow-lg"
        >
          <h4 className="text-xl font-medium mb-2">Fade In Up Animation</h4>
          <p>
            This card animates when it enters the viewport. It uses the useScrollAnimation hook
            with the fadeInUp animation type.
          </p>
        </div>
      </section>
      
      {/* AnimatedSection component */}
      <section className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">AnimatedSection Component</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection animation="fadeInLeft" delay={0.2}>
            <div className="bg-card p-8 rounded-lg shadow-lg h-full">
              <h4 className="text-xl font-medium mb-2">Fade In Left</h4>
              <p>
                This section fades in from the left using the AnimatedSection component.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInRight" delay={0.4}>
            <div className="bg-card p-8 rounded-lg shadow-lg h-full">
              <h4 className="text-xl font-medium mb-2">Fade In Right</h4>
              <p>
                This section fades in from the right using the AnimatedSection component.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Mouse follow effect */}
      <section className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Mouse Follow Effect</h3>
        <div 
          ref={mouseFollowRef} 
          className="bg-card/50 p-8 rounded-lg min-h-[400px] flex items-center justify-center relative overflow-hidden"
        >
          <div className="text-center relative z-10">
            <h4 className="text-xl font-medium mb-2">Mouse Follow Gradient</h4>
            <p className="max-w-md mx-auto">
              Move your mouse around this area to see the gradient follow your cursor.
              This effect uses the useMouseFollow hook.
            </p>
          </div>
        </div>
      </section>
      
      {/* Hover effect */}
      <section className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Hover Effect</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="hover-card bg-card p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-medium mb-2">Hover Me</h4>
            <p>This card has a hover effect applied using GSAP animations.</p>
          </div>
        </div>
      </section>
      
      {/* Parallax effect */}
      <section className="max-w-4xl mx-auto overflow-hidden">
        <h3 className="text-2xl font-semibold mb-6">Parallax Effect</h3>
        <div className="relative h-[400px] bg-gradient-to-b from-primary/10 to-primary/5 rounded-lg">
          <div 
            ref={parallaxRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <h4 className="text-3xl font-bold mb-2">Parallax Effect</h4>
              <p className="max-w-md mx-auto">
                This text moves at a different speed than the background as you scroll.
                It uses the useParallax hook.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimationExample; 