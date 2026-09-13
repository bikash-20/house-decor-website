# Wisteria & Blossom

A 2-page marketing/showcase website for a home decor brand. Wallpaper murals and wall frames, derived directly from supplied reference photography.

**Live (dev):** `npm run dev` → http://localhost:3000
**Live (prod):** `npm run build && npm run start`

---

## Pages

| Route | Description | Hero image |
|---|---|---|
| `/` | Bedroom & Wall Decor — palette, murals, room spotlight, newsletter | `premium-1.jpg` |
| `/frames` | Wall Frames — collection, lifestyle, cross-link back to bedroom | `ostir-8.jpg` |

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15.1.6 (App Router, React 19) |
| Language | TypeScript 5.7 (strict) |
| Styling | Tailwind CSS v4 + CSS custom properties (design tokens) |
| Fonts | Cormorant Garamond (display) + Jost (body), via `next/font/google` |
| Smooth scroll | Lenis 1.3 (custom-tuned: `lerp: 0.08`, expo-out easing) |
| Scroll animation | GSAP 3.13 + ScrollTrigger |
| Image pipeline | `next/image` with build-time AVIF/WebP, responsive `srcSet` |
| Linting | ESLint (next/core-web-vitals) |

---

## Getting started

```bash
cd /Users/bikashtalukder/wallpaper

# Install dependencies
npm install

# Run the development server (Turbopack, fast refresh)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Type check
npm run typecheck

# Lint
npm run lint
```

The dev server runs on **http://localhost:3000** by default. Pass `-p 4000` (or any port) to change.

---

## Project structure

```
wallpaper/
├── app/                            # Next.js App Router
│   ├── layout.tsx                  # Root layout — fonts, html lang, SmoothScroll provider
│   ├── template.tsx                # Page-transition wrapper (CSS fade/wipe on route change)
│   ├── globals.css                 # Design tokens (@theme block) + base styles
│   ├── page.tsx                    # PAGE 1 — Bedroom & Wall Decor
│   ├── frames/
│   │   └── page.tsx                # PAGE 2 — Wall Frames
│   └── not-found.tsx               # 404 page
│
├── src/
│   ├── config/
│   │   └── site.ts                 # SINGLE SOURCE OF TRUTH — hero images, contact info, nav
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx             # Fixed top nav with scroll-aware backdrop
│   │   │   └── Footer.tsx          # Shared footer + contact block (PRD §3.3)
│   │   ├── hero/
│   │   │   ├── HeroP1.tsx          # Full-bleed hero + GSAP parallax + pill badge
│   │   │   └── HeroP2.tsx          # Swappable hero (single config prop)
│   │   ├── sections/               # Page sections
│   │   │   ├── BrandStatement.tsx
│   │   │   ├── PaletteShowcase.tsx       # Hover-reveal swatch cards
│   │   │   ├── MuralGallery.tsx          # Asymmetric grid + click-to-lightbox
│   │   │   ├── RoomSpotlight.tsx         # Image + copy split
│   │   │   ├── Newsletter.tsx
│   │   │   ├── FrameCollection.tsx       # 13 frames, asymmetric grid
│   │   │   ├── LifestyleStrip.tsx        # 7 horizontal cards
│   │   │   └── CrossLinkP1.tsx           # P2 → P1 link band
│   │   ├── ui/
│   │   │   ├── Button.tsx                # Primary / ghost / underline variants + magnetic hover
│   │   │   ├── BotanicalDivider.tsx      # Inline SVG wisteria-vine separator
│   │   │   ├── GrainOverlay.tsx          # Subtle paper-grain texture overlay
│   │   │   └── Lightbox.tsx              # Eased open/close, body-locked, Esc dismiss
│   │   └── motion/
│   │       ├── SmoothScroll.tsx          # Lenis provider (client)
│   │       ├── ScrollReveal.tsx          # GSAP ScrollTrigger wrapper (client)
│   │       └── MagneticHover.tsx         # Pointer-tracking hover effect
│   │
│   ├── hooks/
│   │   ├── useReducedMotion.ts           # prefers-reduced-motion detection
│   │   ├── useLenis.ts                   # Lenis + GSAP-ticker wiring
│   │   └── useGsapReveal.ts              # Shared ScrollTrigger factory (DRY)
│   │
│   ├── data/
│   │   ├── palette.ts                    # 8 swatches (tones sampled from hero image)
│   │   ├── murals.ts                     # 16 wall murals
│   │   └── frames.ts                     # 13 wall frames
│   │
│   └── lib/
│       └── easing.ts                     # Custom cubic-bezier easings
│
├── public/                              # Static assets (served from /)
│   ├── bedroom-*.jpg                     # Bedroom reference photography
│   ├── image-*.jpg                       # Frame / cobalt-blossom reference photography
│   ├── premium-*.jpg                     # Premium collection (8 images)
│   └── ostir-*.jpg                       # Ostir collection (6 images)
│
├── next.config.mjs                      # AVIF/WebP formats, device sizes
├── tsconfig.json                        # strict TypeScript, @/* path alias
├── tailwind v4 (CSS @theme in globals.css)
├── postcss.config.mjs                   # Tailwind plugin
├── .eslintrc.json
├── .gitignore
└── package.json
```

---

## Design system

### Color palette (defined in `app/globals.css` `@theme` block)

| Token | Hex | Use |
|---|---|---|
| `--color-bg-base` | `#C9C4B9` | Primary background — plaster/stone |
| `--color-bg-light` | `#F3F0E9` | Section backgrounds, cards |
| `--color-bg-deep` | `#A9A398` | Footer / depth sections |
| `--color-paper` | `#FAF7F1` | Bright surfaces, button text on dark |
| `--color-accent-wisteria` | `#7B5EA7` | Headings, primary accent |
| `--color-accent-lavender-soft` | `#B79FD1` | Hover states, links, italic accents |
| `--color-accent-sage` | `#5F6F4E` | Secondary accent |
| `--color-ink` | `#2B2620` | Body copy (only color passing WCAG AA on stone) |
| `--color-ink-muted` | `#5A5249` | De-emphasized body copy |
| `--color-wood` | `#8A6248` | Optional warm detail |

**Rule:** No hex literals anywhere outside `app/globals.css`. Components reference `text-[var(--color-ink)]`, `bg-[var(--color-bg-base)]`, etc. Single source of truth.

### Typography

- **Display / Headings:** Cormorant Garamond (300 / 400 / 500 / 600, italic) — set globally on all `h1–h6`
- **Body / UI:** Jost (300 / 400 / 500) — readable geometric sans
- Body min 17px, line-height 1.7, modular scale via `clamp()` for display sizes

### Easings (custom, not browser defaults)

| Token | Curve | Use |
|---|---|---|
| `--ease-lush` | `cubic-bezier(0.22, 1, 0.36, 1)` | Smooth deceleration — most transitions |
| `--ease-velvet` | `cubic-bezier(0.65, 0, 0.35, 1)` | Symmetric ease-in-out — page transitions |

---

## How to swap a hero image

A single file controls both page heroes:

```ts
// src/config/site.ts
export const siteConfig = {
  heroPage1: '/premium-1.jpg',   // ← change this
  heroPage2: '/ostir-8.jpg',     // ← or this
  // ...
};
```

That's it. Both `<HeroP1>` and `<HeroP2>` read from this single object. No component changes required.

---

## Animation system

- **Smooth scroll:** Lenis, `lerp: 0.08`, driven by GSAP's ticker (tight ScrollTrigger sync). Honors `prefers-reduced-motion`.
- **Scroll reveals:** `useGsapReveal(ref, opts)` is the single shared ScrollTrigger factory. Every section uses it — no duplicated boilerplate. Defaults: `y: 24, stagger: 0.08, duration: 0.9, start: 'top 85%', ease: 'expo.out'`.
- **Parallax:** Hero images get `ScrollTrigger.create({ scrub: 0.6 })` translating `yPercent: -12` on the parent wrapper.
- **Magnetic hover:** Buttons drift toward cursor via pointer events. Disabled on touch (`e.pointerType !== 'mouse'` guard).
- **Page transitions:** `app/template.tsx` re-mounts on each navigation, triggering a CSS-driven fade-up via `@keyframes pageEnter`.

---

## Accessibility

- **WCAG AA contrast** — body copy always uses `--color-ink`. Lavender (`--color-accent-lavender-soft`) is for display/headings only.
- **Skip-to-content link** — appears on focus, jumps to `#main`.
- **Visible focus rings** — `:focus-visible` uses wisteria outline.
- **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`, proper heading hierarchy.
- **Alt text** — every `<Image>` has a descriptive `alt`. Decorative SVGs use `aria-hidden`.
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` kills all animations, shows content immediately, disables Lenis.
- **Keyboard nav** — all interactive elements reachable, lightbox dismissable via Esc.

---

## Performance

- **Images** — `next/image` with build-time AVIF/WebP. Below-fold images lazy-load by default. Heroes use `priority`.
- **Fonts** — `next/font/google` self-hosts woff2, no FOUT, only display weights preloaded.
- **Bundle** — Motion libraries (gsap, lenis) imported only inside `'use client'` motion components. Pages themselves are React Server Components.
- **Static prerender** — All routes are `○ Static` at build time.
- **First-load JS** — ~165 KB on Page 1, ~164 KB on Page 2.

---

## Image library

All images live in `public/`. The site uses 35 of 36 available images; the only unused file is `bedroom-9.jpg` (the PRD's original Page 1 hero, since replaced by `premium-1.jpg`).

| Collection | Count | Usage |
|---|---|---|
| `bedroom-*.jpg` | 9 used (10 in folder) | Murals, lifestyle strip, frame backgrounds |
| `image-*.jpg` | 12 used | Lifestyle strip, frame collection, hero (alt) |
| `premium-*.jpg` | 8 used | Mural gallery (premium collection) |
| `ostir-*.jpg` | 6 used | Page 2 hero + mural gallery (ostir collection) |

---

## Contact

Email: **bikashtalukder040@gmail.com**
Phone: **+880 1926 240 062**
LinkedIn: [linkedin.com/in/bikash-talukder-6497633b8](https://linkedin.com/in/bikash-talukder-6497633b8)
GitHub: [github.com/bikash-20](https://github.com/bikash-20)
