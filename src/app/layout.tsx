import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://srilankatrails.com'),
  title: {
    default: 'Sri Lanka Trails — Travel Blog & Guides',
    template: '%s | Sri Lanka Trails',
  },
  description:
    'Discover the best of Sri Lanka — beaches, ancient temples, wildlife, food, and hidden gems. Expert travel guides, itineraries, and tips for every traveler.',
  keywords: ['Sri Lanka', 'travel', 'tourism', 'travel blog', 'itinerary', 'beaches', 'Sigiriya'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://srilankatrails.com',
    siteName: 'Sri Lanka Trails',
    title: 'Sri Lanka Trails — Travel Blog & Guides',
    description:
      'Discover the best of Sri Lanka — beaches, ancient temples, wildlife, food, and hidden gems.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Sri Lanka Trails',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Lanka Trails — Travel Blog & Guides',
    description: 'Discover the best of Sri Lanka.',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/*
         * ============================================================
         * GOOGLE ADSENSE — Uncomment and replace with your publisher ID
         * ============================================================
         * <script
         *   async
         *   src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
         *   crossOrigin="anonymous"
         * />
         * ============================================================
         */}
      </head>
      <body className="font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main id="main-content" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
