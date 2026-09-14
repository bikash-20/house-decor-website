/**
 * Logo mark — stylized wisteria bloom (a hanging cluster + a single leaf).
 * Designed to read at any size: the silhouette stays legible from 16px favicon
 * up to a hero-scale mark. Uses the design tokens (wisteria + lavender + sage),
 * so the colors stay in sync with the rest of the site.
 */

export interface LogoMarkProps {
  /** Width/height in pixels. The viewBox is square so aspect is preserved. */
  size?: number;
  className?: string;
  /** Optional accessible label. When omitted the SVG is decorative. */
  title?: string;
}

export default function LogoMark({ size = 32, className = '', title }: LogoMarkProps) {
  const labelled = Boolean(title);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={labelled ? 'img' : 'presentation'}
      aria-label={labelled ? title : undefined}
      aria-hidden={labelled ? undefined : true}
      className={className}
    >
      {/* Branch — slim curve from upper-right toward center */}
      <path
        d="M8 14 C 22 18, 30 22, 38 28"
        stroke="var(--color-accent-sage)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Leaf — single leaf resting on the branch */}
      <path
        d="M30 19 q 5 -4 10 -1 q -3 6 -10 1 z"
        fill="var(--color-accent-sage)"
        opacity="0.85"
      />
      {/* Stem of the hanging cluster */}
      <path
        d="M38 28 C 36 34, 34 40, 32 46"
        stroke="var(--color-accent-sage)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Wisteria bloom — three layered ellipses for depth */}
      <ellipse cx="32" cy="36" rx="4.5" ry="3.2" fill="var(--color-accent-wisteria)" />
      <ellipse cx="29" cy="42" rx="4" ry="3" fill="var(--color-accent-wisteria)" opacity="0.92" />
      <ellipse cx="33" cy="48" rx="3.5" ry="2.6" fill="var(--color-accent-lavender-soft)" />
      <ellipse cx="28" cy="52" rx="3" ry="2.2" fill="var(--color-accent-lavender-soft)" opacity="0.9" />
      <ellipse cx="33" cy="56" rx="2.4" ry="1.8" fill="var(--color-accent-lavender-soft)" opacity="0.8" />
      {/* Tiny highlight on the topmost petal */}
      <ellipse cx="30.5" cy="35" rx="1.4" ry="0.9" fill="var(--color-paper)" opacity="0.35" />
    </svg>
  );
}