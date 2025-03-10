'use client';

import Link from 'next/link';
import { useTheme } from '@mui/material';
import { useEffect } from 'react';
import animationUtils from '@/lib/animations';

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  
  // Initialize GSAP animations
  useEffect(() => {
    animationUtils.initializeAnimations();
    console.log('GSAP animations initialized in Examples Layout');
  }, []);
  
  // Set data-theme attribute for CSS
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.palette.mode);
    console.log('Theme set to:', theme.palette.mode);
  }, [theme.palette.mode]);
  
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Moin Portfolio
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/examples/animations" className="hover:text-primary">
                  Animations
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
                  Back to Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      {children}
      
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>Examples of components and features used in the portfolio website.</p>
        </div>
      </footer>
    </div>
  );
} 