import { Metadata } from 'next';
import AnimationExamplePage from '@/components/examples/AnimationExamplePage';

export const metadata: Metadata = {
  title: 'Animation Examples | Moin Portfolio',
  description: 'Examples of animations and effects using the custom animation library',
};

export default function AnimationsPage() {
  return <AnimationExamplePage />;
} 