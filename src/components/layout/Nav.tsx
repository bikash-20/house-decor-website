'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import GlassPill from '@/components/ui/GlassPill';
import { siteConfig } from '@/config/site';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-lush)] ${
        scrolled
          ? 'bg-[var(--color-bg-base)]/80 backdrop-blur-md py-4 shadow-[0_1px_0_rgba(43,38,32,0.06)]'
          : 'bg-transparent py-6'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10"
        aria-label="Primary"
      >
        <Logo markSize={34} glass />

        <ul className="flex items-center gap-3 md:gap-4">
          {siteConfig.nav.map((item) => {
            const isActive =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className="inline-flex"
                >
                  <GlassPill
                    tone={isActive ? 'wisteria' : 'paper'}
                    className="!px-4 !py-2"
                  >
                    <span
                      className={`inline-block h-1.5 w-1.5 rounded-full transition-all duration-500 ease-[var(--ease-lush)] ${
                        isActive
                          ? 'bg-[var(--color-accent-lavender-soft)] shadow-[0_0_8px_rgba(183,159,209,0.85)]'
                          : 'bg-paper/55 group-hover:bg-paper'
                      }`}
                      aria-hidden
                    />
                    <span>{item.label}</span>
                  </GlassPill>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
