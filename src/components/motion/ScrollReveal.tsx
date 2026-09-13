'use client';

import { useRef, type ReactNode } from 'react';
import { useGsapReveal, type RevealOptions } from '@/hooks/useGsapReveal';

interface ScrollRevealProps extends RevealOptions {
  children: ReactNode;
  /** Wrapper tag. Default 'div'. */
  as?: 'div' | 'section' | 'article' | 'ul' | 'ol';
  className?: string;
  /** When true, treats children as a stagger group — wraps each child in [data-reveal]. */
  staggerChildren?: boolean;
}

/**
 * Wraps a section so its `[data-reveal]` children fade/slide-up on enter.
 * Use `<ScrollReveal as="section" stagger>...children with data-reveal...</ScrollReveal>`
 */
export default function ScrollReveal({
  children,
  as = 'div',
  className,
  staggerChildren = false,
  ...options
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  useGsapReveal(ref as React.RefObject<HTMLElement | null>, options);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal-parent={staggerChildren ? 'true' : undefined}
    >
      {children}
    </Tag>
  );
}
