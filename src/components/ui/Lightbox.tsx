'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface LightboxProps {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Eased open/close lightbox. Body-scroll-locked while open.
 * Esc to close, click backdrop to close.
 */
export default function Lightbox({ open, onClose, src, alt, caption }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the dialog for screen readers
    requestAnimationFrame(() => dialogRef.current?.focus());

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      tabIndex={-1}
      ref={dialogRef}
      className="page-enter fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-ink)]/90 p-6 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-paper/30 text-paper transition-all hover:bg-paper hover:text-ink"
        aria-label="Close lightbox"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
          <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>

      <figure className="relative max-h-[88vh] w-full max-w-5xl">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="rounded-[var(--radius-md)] object-contain shadow-2xl"
            quality={92}
          />
        </div>
        {caption && (
          <figcaption className="mt-6 text-center font-display text-lg italic text-paper/80">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
