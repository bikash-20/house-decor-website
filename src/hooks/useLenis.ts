'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './useReducedMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initializes Lenis smooth scroll once and wires it into GSAP's
 * ScrollTrigger tick. Honors `prefers-reduced-motion`.
 *
 * PRD §4: "lower lerp, custom easing — not default settings."
 *  - lerp 0.08 (heavy/luxurious feel)
 *  - smoothWheel true
 *  - gsap.ticker drives the RAF, not Lenis' default rAF
 */
export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      // Make sure Lenis is not active
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
    });

    lenisRef.current = lenis;

    // Drive Lenis from GSAP's ticker for tight ScrollTrigger sync
    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    // Sync ScrollTrigger when Lenis scrolls
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  return lenisRef;
}
