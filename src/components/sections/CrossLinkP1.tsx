import Link from 'next/link';
import ScrollReveal from '@/components/motion/ScrollReveal';

/**
 * Cross-link band back to Page 1.
 * PRD §3.2.4.
 */
export default function CrossLinkP1() {
  return (
    <section
      aria-labelledby="crosslink-heading"
      className="surface-paper relative overflow-hidden py-24 md:py-32"
    >
      <div className="grain-overlay" aria-hidden />
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <ScrollReveal staggerChildren>
          <p data-reveal className="eyebrow">
            One more thing
          </p>
          <h2
            id="crosslink-heading"
            data-reveal
            className="mt-6 font-display text-4xl leading-[1.1] text-ink md:text-6xl"
          >
            A frame is only half a room. The <em className="text-wisteria">wall</em> is the rest.
          </h2>
          <p data-reveal className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            If you&rsquo;re starting with the wall, our bedroom collection has hand-rolled murals,
            plaster finishes, and the colours that started this whole brand.
          </p>
          <div data-reveal className="mt-10">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 border-b border-wisteria pb-2 font-display text-2xl text-wisteria transition-colors hover:border-ink hover:text-ink"
            >
              Visit the bedroom collection
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
