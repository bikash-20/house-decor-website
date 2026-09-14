import Link from 'next/link';
import LogoMark from './LogoMark';

export interface LogoProps {
  /** Render as a link to home (true) or static mark (false). */
  asLink?: boolean;
  /** Width of the mark in pixels. Wordmark font scales with it. */
  markSize?: number;
  /** Optional brand name override. Defaults to 'Wisteria & Blossom'. */
  brand?: string;
  className?: string;
}

/**
 * Brand logo — wisteria-bloom mark + 'Wisteria & Blossom' wordmark.
 * The "&" inherits the lavender-soft italic treatment used elsewhere
 * (Nav, footer) for visual continuity.
 */
export default function Logo({
  asLink = true,
  markSize = 36,
  brand = 'Wisteria & Blossom',
  className = '',
}: LogoProps) {
  const wordmark = (
    <span className="font-display text-2xl tracking-tight text-wisteria md:text-[1.7rem] leading-none whitespace-nowrap">
      <span className="text-ink">Wisteria</span>{' '}
      <span className="text-[var(--color-accent-lavender-soft)] italic">&amp;</span>{' '}
      <span className="text-ink">Blossom</span>
    </span>
  );

  const inner = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={markSize} />
      {wordmark}
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