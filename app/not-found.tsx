import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      id="main"
      className="surface-base flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="eyebrow mb-6">404 — Lost in the garden</p>
      <h1 className="font-display text-5xl md:text-7xl text-ink">
        This <em className="text-wisteria">path</em> has gone to seed.
      </h1>
      <p className="mt-6 max-w-md text-ink-muted">
        The page you were looking for has wilted, drifted, or never bloomed at all.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 border-b border-wisteria pb-1 text-wisteria transition-colors hover:text-ink"
      >
        ← Back to the bedroom
      </Link>
    </main>
  );
}
