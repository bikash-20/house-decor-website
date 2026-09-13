'use client';

import { useState } from 'react';
import Image from 'next/image';
import { murals } from '@/data/murals';
import ScrollReveal from '@/components/motion/ScrollReveal';
import Lightbox from '@/components/ui/Lightbox';

/**
 * Mural gallery — asymmetric grid with hover-zoom + caption reveal + click to lightbox.
 * PRD §3.1.3 + §4.
 */
export default function MuralGallery() {
  const [active, setActive] = useState<(typeof murals)[number] | null>(null);

  return (
    <section
      aria-labelledby="mural-heading"
      className="surface-light relative py-28 md:py-40"
    >
      <div className="grain-overlay" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <ScrollReveal>
            <p data-reveal className="eyebrow">
              Wall murals
            </p>
            <h2
              id="mural-heading"
              data-reveal
              className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ink md:text-6xl"
            >
              A small, considered collection.
            </h2>
          </ScrollReveal>
          <ScrollReveal className="max-w-sm">
            <p data-reveal className="text-base leading-relaxed text-ink-muted">
              Each mural is hand-rolled in our atelier. Lead time is four to six weeks. Custom palettes
              and dimensions on request.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal
          as="ul"
          staggerChildren
          className="mt-16 grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px] lg:gap-6"
        >
          {murals.map((mural) => (
            <li
              key={mural.id}
              data-reveal
              className={[
                'group relative cursor-pointer overflow-hidden rounded-[var(--radius-lg)] shadow-[0_8px_28px_-12px_rgba(43,38,32,0.18)]',
                sizeClass(mural.size),
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActive(mural)}
            >
              <Image
                src={mural.src}
                alt={mural.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-lush)] group-hover:scale-110"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 px-6 pb-6 opacity-0 transition-all duration-500 ease-[var(--ease-lush)] group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-2xl text-paper">{mural.title}</p>
                <p className="mt-2 text-sm text-paper/80">{mural.caption}</p>
              </div>
              {/* Always-visible label on small screens */}
              <p className="absolute bottom-4 left-6 font-display text-xl text-paper md:hidden">
                {mural.title}
              </p>
            </li>
          ))}
        </ScrollReveal>
      </div>

      <Lightbox
        open={active !== null}
        onClose={() => setActive(null)}
        src={active?.src ?? ''}
        alt={active?.alt ?? ''}
        caption={active ? `${active.title} — ${active.caption}` : undefined}
      />
    </section>
  );
}

function sizeClass(size?: string): string {
  switch (size) {
    case 'lg':
      return 'sm:col-span-2 sm:row-span-2';
    case 'tall':
      return 'sm:row-span-2';
    case 'md':
      return 'sm:col-span-1 sm:row-span-1';
    default:
      return '';
  }
}
