import Image from 'next/image';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { LinkButton } from '@/components/ui/Button';

/**
 * Room spotlight — image + copy split layout.
 * PRD §3.1.4.
 */
export default function RoomSpotlight() {
  return (
    <section
      aria-labelledby="spotlight-heading"
      className="surface-base relative overflow-hidden py-28 md:py-40"
    >
      <div className="grain-overlay" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <ScrollReveal className="relative">
          <div data-reveal className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] shadow-[0_24px_60px_-20px_rgba(43,38,32,0.3)]">
            <Image
              src="/bedroom-7.jpg"
              alt="Bouclé sofa against wisteria mural — featured room"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              quality={90}
            />
          </div>
          {/* Floating detail card */}
          <div
            data-reveal
            className="absolute -bottom-8 -right-6 hidden max-w-[220px] rounded-[var(--radius-md)] bg-[var(--color-paper)] p-6 shadow-[0_16px_36px_-12px_rgba(43,38,32,0.25)] md:block"
          >
            <p className="eyebrow">Featured room</p>
            <p className="mt-3 font-display text-xl text-ink leading-tight">
              The Bouclé &amp; Bloom Suite
            </p>
            <p className="mt-2 text-sm text-ink-muted">Plaster, wisteria, walnut. 24 m².</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col justify-center md:pl-6">
          <ScrollReveal staggerChildren>
            <p data-reveal className="eyebrow">
              This season
            </p>
            <h2
              id="spotlight-heading"
              data-reveal
              className="mt-5 font-display text-4xl leading-[1.05] text-ink md:text-6xl"
            >
              The room that{' '}
              <em className="text-wisteria">started it all.</em>
            </h2>
            <p data-reveal className="mt-8 text-lg leading-relaxed text-ink-muted">
              A 24 m² reading bedroom in pale stone, anchored by a single wisteria wall. Three coats
              of plaster — first to fill, second to float, third to receive the bloom. The mural was
              rolled over four days and left to cure for a week before the first piece of furniture
              came in.
            </p>
            <p data-reveal className="mt-5 text-lg leading-relaxed text-ink-muted">
              We return to this room in our heads whenever a new client asks what we mean by{' '}
              <em>quiet</em>.
            </p>
            <div data-reveal className="mt-10">
              <LinkButton
                href="mailto:bikashtalukder040@gmail.com?subject=Commission%20enquiry"
                variant="ghost"
              >
                Commission a similar room
              </LinkButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
