'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import GlassPill from '@/components/ui/GlassPill';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Page 1 hero — bedroom-9.jpg full-bleed with parallax + headline overlay.
 * PRD §3.1: "subtle parallax on scroll"
 */
export default function HeroP1({ imageSrc }: { imageSrc: string }) {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Headline reveal
  useGsapReveal(headlineRef, { y: 32, stagger: 0.12, duration: 1.1, start: 'top 90%' });

  // Image parallax — scrub-driven ScrollTrigger
  useEffect(() => {
    if (reduced || !imgWrapRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: imgWrapRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6,
      animation: gsap.to(imgWrapRef.current, {
        yPercent: -15,
        ease: 'none',
      }),
    });
    return () => trigger.kill();
  }, [reduced]);

  return (
    <section
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
      aria-label="Bedroom decor hero"
    >
      <div ref={imgWrapRef} className="absolute inset-0" style={{ willChange: 'transform' }}>
        <Image
          src={imageSrc}
          alt="Premium bedroom hero — wisteria and lavender palette"
          fill
          priority
          sizes="100vw"
          quality={88}
          className="object-cover"
          style={{ transform: reduced ? undefined : 'scale(1.08)' }}
        />
        {/* Bottom-to-top dark gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(43,38,32,0.65) 0%, rgba(43,38,32,0.2) 45%, transparent 70%)',
          }}
        />
      </div>

      {/* Botanical accent — top right */}
      <svg
        aria-hidden
        className="pointer-events-none absolute right-6 top-24 z-10 hidden md:block"
        width="160"
        height="200"
        viewBox="0 0 160 200"
        fill="none"
        style={{ opacity: 0.55 }}
      >
        <path
          d="M80 0 C 70 40, 90 60, 80 100 C 70 140, 90 160, 80 200"
          stroke="var(--color-paper)"
          strokeWidth="0.75"
          fill="none"
        />
        {[30, 60, 90, 120, 150, 180].map((y, i) => (
          <ellipse
            key={i}
            cx={i % 2 ? 76 : 84}
            cy={y}
            rx="4"
            ry="3"
            fill="var(--color-accent-lavender-soft)"
            opacity={0.7 - i * 0.08}
          />
        ))}
      </svg>

      <div
        ref={headlineRef}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-28"
      >
        <div data-reveal>
          <GlassPill>
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-lavender-soft)] shadow-[0_0_8px_rgba(183,159,209,0.8)]"
            />
            <span>Bedroom &amp; Wall Decor — Vol. 01</span>
          </GlassPill>
        </div>
        <h1
          data-reveal
          className="mt-5 max-w-3xl font-display text-[clamp(3rem,7vw,6rem)] leading-[0.98] text-paper"
        >
          Rooms that feel like{' '}
          <em className="text-[var(--color-accent-lavender-soft)]">a long exhale.</em>
        </h1>
        <p data-reveal className="mt-6 max-w-xl text-paper/85 text-lg font-light leading-relaxed">
          Wallpaper murals and quiet walls for slow rooms. Painted, plastered, and finished by hand —
          never printed, never hurried.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/frames"
            className="inline-flex items-center gap-3 rounded-full bg-[var(--color-paper)] px-7 py-3.5 text-[15px] font-normal text-ink transition-all duration-500 hover:bg-[var(--color-accent-wisteria)] hover:text-paper"
          >
            Browse wall frames
            <span aria-hidden>→</span>
          </Link>
          <a
            href="#palette"
            className="inline-flex items-center gap-2 px-2 py-1 text-[15px] font-light text-paper/85 transition-colors hover:text-paper"
          >
            <span aria-hidden>↓</span> See the bedroom palette
          </a>
        </div>
      </div>
    </section>
  );
}
