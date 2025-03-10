'use client';

import { Suspense } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import MetricsSection from '@/components/sections/MetricsSection';
import Loading from './loading';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <MetricsSection />
        <ServicesSection />
      </Suspense>
    </main>
  );
} 