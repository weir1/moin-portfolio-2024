'use client';

import AnimationExample from '@/components/examples/AnimationExample';
import { useRef, useEffect } from 'react';

export default function AnimationExamplePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Direct test of mouse follow effect
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
      console.log(`Mouse position: ${x}, ${y}`);
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Animation Examples</h1>
      
      {/* Direct test of mouse follow effect */}
      <div 
        ref={containerRef}
        className="relative min-h-[300px] mb-12 rounded-lg overflow-hidden bg-card"
        style={{ position: 'relative' }}
      >
        <div className="mouse-gradient"></div>
        <div className="relative z-10 p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Direct Mouse Follow Test</h2>
          <p>Move your mouse around this area to see the gradient follow your cursor.</p>
        </div>
      </div>
      
      <AnimationExample />
    </main>
  );
} 