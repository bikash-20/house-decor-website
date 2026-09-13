'use client';

import { useLenis } from '@/hooks/useLenis';

/**
 * Provider that initializes Lenis and wires it into GSAP's ticker.
 * Mount once, near the root. Children are unaffected — Lenis operates
 * on the document scroll.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}
