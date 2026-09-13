'use client';

import { useRef, type ReactNode } from 'react';

interface MagneticHoverProps {
  children: ReactNode;
  /** Pixel pull radius. Default 0.25 = 25% of element width. */
  strength?: number;
  className?: string;
  as?: 'button' | 'a' | 'div';
}

/**
 * Adds a subtle magnetic pull on hover — the element drifts toward
 * the cursor. Disabled on touch devices (handled by pointer detection).
 */
export default function MagneticHover({
  children,
  strength = 0.25,
  className,
  as = 'div',
}: MagneticHoverProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  };

  const Tag = as as React.ElementType;
  const isInteractive = as === 'button' || as === 'a';

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement>}
      className={className}
      onPointerMove={isInteractive ? handleMove : handleMove}
      onPointerLeave={handleLeave}
      style={{ transition: 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)' }}
    >
      {children}
    </Tag>
  );
}
