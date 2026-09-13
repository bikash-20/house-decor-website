import { siteConfig } from '@/config/site';
import BotanicalDivider from '@/components/ui/BotanicalDivider';

export default function Footer() {
  const c = siteConfig.contact;
  return (
    <footer
      className="surface-deep relative mt-32 overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <div className="grain-overlay" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <h2
          id="footer-heading"
          className="font-display text-4xl text-paper md:text-6xl leading-[1.05]"
        >
          Let&rsquo;s bring <em className="text-[var(--color-accent-lavender-soft)]">quiet</em>
          <br />
          into your room.
        </h2>

        <p className="mt-8 max-w-md text-paper/80 font-light leading-relaxed">
          For bespoke mural orders, frame commissions, or simply to say hello — reach out by any
          channel below. We respond within two business days.
        </p>

        <BotanicalDivider
          className="mt-16 mb-16"
          color="var(--color-accent-lavender-soft)"
        />

        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="eyebrow text-[var(--color-accent-lavender-soft)]">Email</dt>
            <dd className="mt-3">
              <a
                href={`mailto:${c.email}`}
                className="font-display text-xl text-paper transition-colors hover:text-[var(--color-accent-lavender-soft)]"
              >
                {c.email}
              </a>
            </dd>
          </div>

          <div>
            <dt className="eyebrow text-[var(--color-accent-lavender-soft)]">Phone</dt>
            <dd className="mt-3">
              <a
                href={`tel:${c.phone.replace(/\s/g, '')}`}
                className="font-display text-xl text-paper transition-colors hover:text-[var(--color-accent-lavender-soft)]"
              >
                {c.phoneDisplay}
              </a>
            </dd>
          </div>

          <div>
            <dt className="eyebrow text-[var(--color-accent-lavender-soft)]">LinkedIn</dt>
            <dd className="mt-3">
              <a
                href={c.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xl text-paper transition-colors hover:text-[var(--color-accent-lavender-soft)]"
              >
                Bikash Talukder
              </a>
            </dd>
          </div>

          <div>
            <dt className="eyebrow text-[var(--color-accent-lavender-soft)]">GitHub</dt>
            <dd className="mt-3">
              <a
                href={c.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xl text-paper transition-colors hover:text-[var(--color-accent-lavender-soft)]"
              >
                @bikash-20
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-8 text-sm text-paper/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.brand}. All work made with care.</p>
          <p className="font-display italic text-paper/70">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
