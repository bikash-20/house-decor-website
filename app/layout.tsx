import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import SmoothScroll from '@/components/motion/SmoothScroll';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wisteria & Blossom — Wallpaper Murals & Wall Frames',
  description:
    'A curated collection of wallpaper murals and wall frames — wisteria, lavender, and quiet light. Designed for rooms that feel like a long exhale.',
  metadataBase: new URL('https://wisteria-and-blossom.local'),
  openGraph: {
    title: 'Wisteria & Blossom',
    description: 'Wallpaper murals & wall frames — curated for cozy, elegant rooms.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
