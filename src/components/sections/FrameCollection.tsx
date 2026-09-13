'use client';

import Image from 'next/image';
import { frames } from '@/data/frames';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { LinkButton } from '@/components/ui/Button';

/**
 * Frame collection — asymmetric masonry-ish grid.
 * Each card reveals material / size / price on hover.
 * PRD §3.2.2 + §4.
 */
export default function FrameCollection() {
  return (
    <section
      id="collection"
      aria-labelledby="collection-heading"
      className="surface-light relative py-28 md:py-40"
    >
      <div className="grain-overlay" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <ScrollReveal>
            <p data-reveal className="eyebrow">
              The collection
            </p>
            <h2
              id="collection-heading"
              data-reveal
              className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ink md:text-6xl"
            >
              Thirteen silhouettes. <em className="text-wisteria">One temperament.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal className="max-w-sm">
            <p data-reveal className="text-base leading-relaxed text-ink-muted">
              Each frame is built around a single board. We choose grain first, then cut. Prices
              shown are starting points for the smallest size in each family.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal
          as="ul"
          staggerChildren
          className="mt-16 grid auto-rows-[280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px] lg:gap-6"
        >
          {frames.map((frame) => (
            <li
              key={frame.id}
              data-reveal
              className={[
                'group relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-paper)] shadow-[0_8px_28px_-12px_rgba(43,38,32,0.18)] transition-all duration-700 ease-[var(--ease-lush)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-18px_rgba(43,38,32,0.28)]',
                sizeClass(frame.size2),
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="relative h-full w-full">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-lush)] group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/85 via-[var(--color-ink)]/10 to-transparent opacity-90"
                />
              </div>

              {/* Persistent label */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl text-paper">{frame.title}</p>
                {/* Hover-only details */}
                <div className="grid grid-cols-3 gap-2 overflow-hidden text-paper/85 transition-all duration-500 ease-[var(--ease-lush)] [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr]">
                  <div className="min-h-0">
                    <div className="grid grid-cols-3 gap-3 pt-3 text-xs">
                      <div>
                        <p className="eyebrow !text-[10px] text-paper/55">Material</p>
                        <p className="mt-1 text-paper/90">{frame.material}</p>
                      </div>
                      <div>
                        <p className="eyebrow !text-[10px] text-paper/55">Size</p>
                        <p className="mt-1 text-paper/90">{frame.size}</p>
                      </div>
                      <div>
                        <p className="eyebrow !text-[10px] text-paper/55">Price</p>
                        <p className="mt-1 text-paper/90">{frame.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ScrollReveal>

        <div className="mt-20 flex justify-center">
          <LinkButton
            href="mailto:bikashtalukder040@gmail.com?subject=Frame%20enquiry"
            variant="primary"
          >
            Enquire about a frame
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

function sizeClass(size?: string): string {
  switch (size) {
    case 'lg':
      return 'sm:col-span-2 sm:row-span-2';
    case 'tall':
      return 'sm:row-span-2';
    default:
      return '';
  }
}
