/**
 * Botanical line-art divider — wisteria vine motif, derived from PRD §2.3.
 * Inline SVG, no asset request. Use between sections.
 */
export default function BotanicalDivider({
  className = '',
  color = 'var(--color-accent-wisteria)',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div aria-hidden className={`flex w-full items-center justify-center ${className}`}>
      <svg
        width="240"
        height="40"
        viewBox="0 0 240 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        {/* Left vine */}
        <path
          d="M0 20 C 30 20, 50 8, 80 20"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
        <path
          d="M0 20 C 30 20, 50 32, 80 20"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
        {/* Hanging flower cluster — simplified wisteria */}
        <g opacity="0.85">
          <path d="M100 18 L 100 32" stroke={color} strokeWidth="0.75" />
          <ellipse cx="100" cy="26" rx="3" ry="2" fill={color} opacity="0.7" />
          <ellipse cx="100" cy="31" rx="2.5" ry="1.8" fill={color} opacity="0.6" />
          <ellipse cx="100" cy="35" rx="2" ry="1.5" fill={color} opacity="0.5" />
        </g>
        {/* Center pearl */}
        <circle cx="120" cy="20" r="2" fill={color} />
        <circle cx="140" cy="20" r="1.2" fill={color} opacity="0.5" />
        {/* Right vine — mirror */}
        <g transform="translate(240 0) scale(-1 1)">
          <path
            d="M0 20 C 30 20, 50 8, 80 20"
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
          <path
            d="M0 20 C 30 20, 50 32, 80 20"
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
        </g>
        {/* Leaf */}
        <path
          d="M195 14 q 6 -4 12 0 q -6 6 -12 0 z"
          fill="none"
          stroke={color}
          strokeWidth="0.75"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
