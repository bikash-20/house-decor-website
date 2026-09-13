'use client';

import { useState } from 'react';
import { palette } from '@/data/palette';
import ScrollReveal from '@/components/motion/ScrollReveal';

/**
 * Palette showcase — color swatch cards with hover tooltip reveal.
 * PRD §3.1.2 + §4 hover states.
 */
export default function PaletteShowcase() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="palette"
      aria-labelledby="palette-heading"
      className="surface-base relative py-28 md:py-40"
    >
      <div className="grain-overlay" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ScrollReveal>
          <p data-reveal className="eyebrow">
            The bedroom palette
          </p>
          <h2
            id="palette-heading"
            data-reveal
            className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ink md:text-6xl"
          >
            Eight <em className="text-wisteria">borrowed</em> tones.
          </h2>
          <p
            data-reveal
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
          >
            Every shade below was lifted from a single wall — the wisteria mural in our atelier. Hover
            for the source.
          </p>
        </ScrollReveal>

        <ScrollReveal
          as="ul"
          staggerChildren
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6"
        >
          {palette.map((swatch) => {
            const isOpen = hovered === swatch.id;
            return (
              <li
                key={swatch.id}
                data-reveal
                className="group"
                onMouseEnter={() => setHovered(swatch.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <article
                  className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)] shadow-[0_8px_28px_-12px_rgba(43,38,32,0.18)] transition-all duration-700 ease-[var(--ease-lush)] group-hover:-translate-y-2 group-hover:shadow-[0_24px_48px_-18px_rgba(43,38,32,0.28)]"
                  style={{ backgroundColor: `var(${swatch.token})` }}
                  aria-label={`${swatch.name}, hex ${swatch.hex}, ${swatch.note}`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 bg-[var(--color-ink)]/85 px-5 py-4 backdrop-blur-sm transition-all duration-500 ease-[var(--ease-lush)]"
                    style={{
                      transform: isOpen ? 'translateY(0)' : 'translateY(calc(100% - 56px))',
                    }}
                  >
                    <div className="flex items-baseline justify-between">
                      <p className="font-display text-lg text-paper">{swatch.name}</p>
                      <p className="font-sans text-xs tracking-wider text-paper/70">{swatch.hex}</p>
                    </div>
                    <p
                      className="overflow-hidden text-sm text-paper/75 transition-all duration-500 ease-[var(--ease-lush)]"
                      style={{
                        maxHeight: isOpen ? '40px' : '0',
                        opacity: isOpen ? 1 : 0,
                        marginTop: isOpen ? '8px' : '0',
                      }}
                    >
                      {swatch.note}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
