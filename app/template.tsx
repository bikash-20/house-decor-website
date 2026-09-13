'use client';

/**
 * App Router template — re-mounts on every navigation, giving us
 * a CSS-driven fade/wipe between pages. No JS animation needed.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
