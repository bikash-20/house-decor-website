'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './useReducedMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface RevealOptions {
  /** Pixels to translate up on enter. Default 24. */
  y?: number;
  /** Stagger between sibling children in seconds. Default 0.08. */
  stagger?: number;
  /** Duration in seconds. Default 0.9. */
  duration?: number;
  /** ScrollTrigger start string. Default 'top 85%'. */
  start?: string;
  /** Selector inside the ref to animate. Default '[data-reveal]'. */
  selector?: string;
  /** Easing string accepted by gsap. Default 'expo.out' (custom-tuned). */
  ease?: string;
  /** Once-only (do not reverse on scroll up). Default true. */
  once?: boolean;
}

/**
 * Single shared ScrollTrigger factory used by every reveal section.
 * Animates `[data-reveal]` children with fade + slide-up.
 * Honors `prefers-reduced-motion`: in that case, content is shown immediately.
 *
 * Usage:
 *   const ref = useRef<HTMLElement>(null);
 *   useGsapReveal(ref, { stagger: 0.1 });
 *   return <div ref={ref}><p data-reveal>...</p></div>;
 */
export function useGsapReveal<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  options: RevealOptions = {},
) {
  const reduced = useReducedMotion();
  const {
    y = 24,
    stagger = 0.08,
    duration = 0.9,
    start = 'top 85%',
    selector = '[data-reveal]',
    ease = 'expo.out',
    once = true,
  } = options;

  // Stable signature to avoid re-creating triggers on every render
  const sig = useRef('');
  const sigKey = JSON.stringify({ y, stagger, duration, start, selector, ease, once, reduced });

  useEffect(() => {
    if (sig.current === sigKey) return;
    sig.current = sigKey;

    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(selector);
    if (!targets.length) return;

    if (reduced) {
      // Show immediately, no animation
      gsap.set(targets, { opacity: 1, y: 0, clearProps: 'transform' });
      return;
    }

    const tween = gsap.fromTo(
      targets,
      { autoAlpha: 0, y },
      {
        autoAlpha: 1,
        y: 0,
        duration,
        stagger,
        ease,
        scrollTrigger: {
          trigger: root,
          start,
          once,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [sigKey, ref, selector, y, stagger, duration, start, ease, once, reduced]);
}
