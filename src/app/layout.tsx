import type { Metadata } from 'next';
import { Providers } from '@/app/providers';
import Layout from '@/components/layout/Layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moin Digital - Full-Stack Digital Growth Expert',
  description: 'Expert in Google Ads, SEO, and Web Development. Helping businesses grow their online presence.',
  keywords: 'digital marketing, web development, SEO, Google Ads, full-stack development',
  authors: [{ name: 'Moin' }],
  openGraph: {
    title: 'Moin Digital - Full-Stack Digital Growth Expert',
    description: 'Expert in Google Ads, SEO, and Web Development. Helping businesses grow their online presence.',
    url: 'https://moindigital.com',
    siteName: 'Moin Digital',
    locale: 'en_US',
    type: 'website',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
} 