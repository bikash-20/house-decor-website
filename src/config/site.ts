/**
 * SITE CONFIG — single source of truth for cross-cutting values.
 * To swap a hero image, change the value below. Nothing else needs touching.
 */

export const siteConfig = {
  brand: 'Wisteria & Blossom',
  tagline: 'Rooms that feel like a long exhale.',

  // ----- HERO IMAGES -----
  // Change these to swap heroes. Path is relative to /public.
  // PRD §3.1 / §3.2 / §8.
  heroPage1: '/premium-1.jpg',
  heroPage2: '/ostir-8.jpg',

  // ----- CONTACT (PRD §3.3) -----
  contact: {
    email: 'bikashtalukder040@gmail.com',
    phone: '+8801926240062',
    phoneDisplay: '+880 1926 240 062',
    linkedin: 'https://linkedin.com/in/bikash-talukder-6497633b8',
    github: 'https://github.com/bikash-20',
  },

  // ----- NAV -----
  nav: [
    { label: 'Bedroom', href: '/' },
    { label: 'Frames', href: '/frames' },
  ] as const,
} as const;

export type SiteConfig = typeof siteConfig;
