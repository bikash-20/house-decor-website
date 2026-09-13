'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/motion/ScrollReveal';

/**
 * Newsletter / CTA band.
 * PRD §3.1.5.
 */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    // Static-site demo: just acknowledge. Real backend would POST here.
    setSubmitted(true);
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="surface-light relative overflow-hidden py-28 md:py-36"
    >
      <div className="grain-overlay" aria-hidden />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal staggerChildren>
          <p data-reveal className="eyebrow">
            Quiet letters
          </p>
          <h2
            id="newsletter-heading"
            data-reveal
            className="mt-5 font-display text-4xl leading-[1.1] text-ink md:text-5xl"
          >
            One letter, every full moon.
          </h2>
          <p data-reveal className="mt-6 text-lg text-ink-muted">
            New murals, frame drops, and slow-room ideas — sent the way real mail arrives: never
            more than once a month.
          </p>

          {!submitted ? (
            <form
              data-reveal
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              aria-label="Subscribe to the newsletter"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourroom.com"
                className="flex-1 rounded-full border border-ink/15 bg-paper px-6 py-3.5 text-[15px] text-ink placeholder:text-ink-muted/60 focus:border-wisteria focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-ink px-7 py-3.5 text-[15px] text-paper transition-all duration-500 hover:bg-wisteria"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p
              data-reveal
              className="mt-10 font-display text-2xl italic text-wisteria"
              role="status"
              aria-live="polite"
            >
              Thank you — we&rsquo;ll write soon.
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
