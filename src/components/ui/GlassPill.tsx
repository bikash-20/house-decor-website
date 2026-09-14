import type { ReactNode, ElementType } from 'react';

export interface GlassPillProps {
  children: ReactNode;
  /** Render as a different tag (e.g. 'a', 'button'). Default 'span'. */
  as?: ElementType;
  /** When set, renders as an anchor. */
  href?: string;
  /** Anchor target. */
  target?: string;
  /** Anchor rel. */
  rel?: string;
  /** Optional click handler for the 'button' form. */
  onClick?: () => void;
  className?: string;
  /** Hue of the gradient border. 'wisteria' matches the brand; 'paper' is cooler. */
  tone?: 'wisteria' | 'paper' | 'lavender';
}

/**
 * Liquid-glassmorphism pill button.
 *
 * Stack from outside-in:
 *  1. A gradient-stroked border via a ::before mask — gives the "wet edge" look
 *     without doubling the element.
 *  2. A frosted backdrop (semi-transparent fill + backdrop-blur) so the dark
 *     hero imagery stays visible behind the pill.
 *  3. A subtle radial highlight on the upper-left for the "liquid" feel.
 *  4. A slow, looping shimmer via a CSS-animated gradient overlay
 *     (no JS, GPU-friendly — respects prefers-reduced-motion).
 *
 * Honors `prefers-reduced-motion: reduce`: shimmer is disabled, hover
 * transitions remain but become instant.
 */
export default function GlassPill({
  children,
  as: Tag = 'span',
  href,
  target,
  rel,
  onClick,
  className = '',
  tone = 'wisteria',
}: GlassPillProps) {
  const isAnchor = Boolean(href);
  const Component = isAnchor ? 'a' : (Tag as ElementType);

  const accent =
    tone === 'paper'
      ? 'rgba(250,247,241,0.85)'
      : tone === 'lavender'
        ? 'rgba(183,159,209,0.95)'
        : 'rgba(123,94,167,0.95)';

  const base =
    'group relative inline-flex w-fit items-center gap-2.5 overflow-hidden rounded-full px-5 py-2.5 ' +
    'font-sans text-[12px] font-normal tracking-[0.22em] uppercase ' +
    'text-paper/90 backdrop-blur-md backdrop-saturate-150 ' +
    'transition-all duration-500 ease-[var(--ease-lush)] ' +
    'hover:-translate-y-0.5 hover:text-paper hover:shadow-[0_18px_36px_-18px_rgba(0,0,0,0.55)]';

  const inner = (
    <>
      {/* Liquid shimmer — drifting gradient highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.18) 48%, rgba(255,255,255,0.28) 52%, transparent 70%)',
          backgroundSize: '220% 100%',
          animation: 'glassShimmer 6s linear infinite',
        }}
      />
      {/* Frosted body */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[1px] -z-20 rounded-full"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 35%, rgba(255,255,255,0.02) 100%)',
          backdropFilter: 'blur(12px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(12px) saturate(1.4)',
        }}
      />
      {/* Soft inner top-left specular highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-1 -left-1 -z-10 h-1/2 w-1/2 rounded-full opacity-70 blur-md"
        style={{ background: 'radial-gradient(circle at top left, rgba(255,255,255,0.45), transparent 70%)' }}
      />
      {/* Gradient border — drawn as a mask so the fill sits below the frosted body */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 rounded-full p-px"
        style={{
          background: `linear-gradient(135deg, ${accent}, rgba(255,255,255,0.35) 40%, ${accent} 80%)`,
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      <span className="relative inline-flex items-center gap-2.5">{children}</span>
    </>
  );

  if (isAnchor) {
    return (
      <Component
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={`${base} ${className}`}
      >
        {inner}
      </Component>
    );
  }

  return (
    <Component onClick={onClick} className={`${base} ${className}`}>
      {inner}
    </Component>
  );
}