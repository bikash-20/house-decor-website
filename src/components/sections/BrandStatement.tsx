import BotanicalDivider from '@/components/ui/BotanicalDivider';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function BrandStatement() {
  return (
    <section
      aria-labelledby="brand-statement-heading"
      className="surface-light relative overflow-hidden py-28 md:py-40"
    >
      <div className="grain-overlay" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal staggerChildren>
          <p data-reveal className="eyebrow">
            On intention
          </p>
          <h2
            id="brand-statement-heading"
            data-reveal
            className="mt-6 font-display text-4xl leading-[1.1] text-ink md:text-6xl"
          >
            We make walls the way <em className="text-wisteria">gardeners</em> make beds —
            <br className="hidden md:block" /> slowly, by hand, and never twice alike.
          </h2>
          <p data-reveal className="mt-10 text-lg leading-relaxed text-ink-muted md:text-xl">
            Every mural begins with the room: its light at four o&rsquo;clock, its drafts in February,
            the way you read in bed. We mix the plaster in the hallway. We match the lavender to a
            single bloom in your garden. The work is slow because it has to last longer than a trend.
          </p>
        </ScrollReveal>

        <BotanicalDivider className="mt-20" />
      </div>
    </section>
  );
}
