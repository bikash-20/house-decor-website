import Link from 'next/link';
import LogoMark from './LogoMark';
import GlassPill from './GlassPill';

export interface LogoProps {
  /** Render as a link to home (true) or static mark (false). */
  asLink?: boolean;
  /** Width of the mark in pixels. Wordmark font scales with it. */
  markSize?: number;
  /** Optional brand name override. Defaults to 'Wisteria & Blossom'. */
  brand?: string;
  /** Render the wordmark on a liquid-glass pill (matches the hero eyebrow). */
  glass?: boolean;
  className?: string;
}

/**
 * Brand logo — wisteria-bloom mark + 'Wisteria & Blossom' wordmark.
 * The "&" inherits the lavender-soft italic treatment used elsewhere
 * for visual continuity. With `glass`, the wordmark sits on a frosted
 * glassmorphism pill matching the hero eyebrow.
 */
export default function Logo({
  asLink = true,
  markSize = 36,
  brand = 'Wisteria & Blossom',
  glass = false,
  className = '',
}: LogoProps) {
  const wordmark = (
    <span className="font-display tracking-tight leading-none whitespace-nowrap">
      <span>Wisteria</span>{' '}
      <span className="text-[var(--color-accent-lavender-soft)] italic">&amp;</span>{' '}
      <span>Blossom</span>
    </span>
  );

  const inner = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={markSize} />
      {glass ? (
        <GlassPill preset="wordmark" tone="wisteria" className="!px-4 !py-2">
          {wordmark}
        </GlassPill>
      ) : (
        <span className="font-display text-2xl md:text-[1.7rem] tracking-tight text-wisteria leading-none whitespace-nowrap">
          <span className="text-ink">Wisteria</span>{' '}
          <span className="text-[var(--color-accent-lavender-soft)] italic">&amp;</span>{' '}
          <span className="text-ink">Blossom</span>
        </span>
      )}
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link
      href="/"
      className="group inline-flex items-center transition-opacity duration-500 hover:opacity-80"
      aria-label={`${brand} — home`}
    >
      {inner}
    </Link>
  );
}