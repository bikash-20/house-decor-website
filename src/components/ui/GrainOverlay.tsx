/**
 * Subtle paper-grain texture overlay. Inline SVG via CSS background.
 * Use inside any section that needs the non-flat feel.
 */
export default function GrainOverlay({ className = '' }: { className?: string }) {
  return <div aria-hidden className={`grain-overlay ${className}`} />;
}
