'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
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
        <Link
          href="/"
          className="font-display text-2xl md:text-3xl tracking-tight text-wisteria"
          aria-label={`${siteConfig.brand} — home`}
        >
          Wisteria <span className="text-[var(--color-accent-lavender-soft)] italic">&amp;</span> Blossom
        </Link>

        <ul className="flex items-center gap-8 md:gap-10">
          {siteConfig.nav.map((item) => {
            const isActive =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative inline-block py-1 text-[15px] font-light text-ink"
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute bottom-0 left-0 h-px bg-wisteria transition-all duration-500 ease-[var(--ease-lush)] ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
