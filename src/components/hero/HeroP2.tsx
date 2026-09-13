'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Page 2 hero — swappable image source (single config prop).
 * PRD §3.2: "Build hero as a swappable component (single config value for image source)."
 */
export default function HeroP2({ imageSrc }: { imageSrc: string }) {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGsapReveal(headlineRef, { y: 32, stagger: 0.12, duration: 1.1, start: 'top 90%' });

  useEffect(() => {
    if (reduced || !imgWrapRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: imgWrapRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6,
      animation: gsap.to(imgWrapRef.current, {
        yPercent: -12,
        ease: 'none',
      }),
    });
    return () => trigger.kill();
  }, [reduced]);

  return (
    <section
      className="relative h-[90svh] min-h-[600px] w-full overflow-hidden"
      aria-label="Wall frames hero"
    >
      <div ref={imgWrapRef} className="absolute inset-0" style={{ willChange: 'transform' }}>
        <Image
          src={imageSrc}
          alt="Ostir No. 8 — a wall frame study in cobalt and blossom"
          fill
          priority
          sizes="100vw"
          quality={88}
          className="object-cover"
          style={{ transform: reduced ? undefined : 'scale(1.06)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(43,38,32,0.6) 0%, rgba(43,38,32,0.15) 50%, transparent 75%)',
          }}
        />
      </div>

      <div
        ref={headlineRef}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-28"
      >
        <div data-reveal className="inline-flex w-fit items-center gap-2 rounded-full border border-paper/40 bg-paper/10 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-lavender-soft)]" aria-hidden />
          <span className="font-sans text-[12px] font-normal tracking-[0.22em] uppercase text-paper">
            Wall Frames — Vol. 02
          </span>
        </div>
        <h1
          data-reveal
          className="mt-5 max-w-3xl font-display text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[0.98] text-paper"
        >
          Frames for the walls{' '}
          <em className="text-[var(--color-accent-lavender-soft)]">already painted.</em>
        </h1>
        <p data-reveal className="mt-6 max-w-xl text-paper/85 text-lg font-light leading-relaxed">
          Hand-finished in walnut, ash, oak and limewashed pine. Six silhouettes, two sizes each.
          Made to order in our atelier in six weeks or less.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#collection"
            className="inline-flex items-center gap-3 rounded-full bg-[var(--color-paper)] px-7 py-3.5 text-[15px] font-normal text-ink transition-all duration-500 hover:bg-[var(--color-accent-wisteria)] hover:text-paper"
          >
            See the collection
            <span aria-hidden>↓</span>
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-2 py-1 text-[15px] font-light text-paper/85 transition-colors hover:text-paper"
          >
            <span aria-hidden>←</span> Back to bedroom decor
          </Link>
        </div>
      </div>
    </section>
  );
}
