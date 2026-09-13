/**
 * Palette swatches derived from bedroom-9.jpg tones.
 * Hex values mirror the design tokens in app/globals.css — kept here as data,
 * not used as inline styles, so the @theme tokens remain source of truth.
 */

export interface PaletteSwatch {
  id: string;
  name: string;
  token: string; // CSS variable name without the var() wrapper
  hex: string;
  note: string;
}

export const palette: PaletteSwatch[] = [
  {
    id: 'stone-plaster',
    name: 'Stone Plaster',
    token: '--color-bg-base',
    hex: '#C9C4B9',
    note: 'Walls — quiet warmth',
  },
  {
    id: 'paper-light',
    name: 'Paper Light',
    token: '--color-bg-light',
    hex: '#F3F0E9',
    note: 'Linens & bedding',
  },
  {
    id: 'boucle-cream',
    name: 'Bouclé Cream',
    token: '--color-paper',
    hex: '#FAF7F1',
    note: 'Sofa upholstery',
  },
  {
    id: 'wisteria',
    name: 'Wisteria',
    token: '--color-accent-wisteria',
    hex: '#7B5EA7',
    note: 'Flower clusters',
  },
  {
    id: 'lavender-whisper',
    name: 'Lavender Whisper',
    token: '--color-accent-lavender-soft',
    hex: '#B79FD1',
    note: 'Soft accents',
  },
  {
    id: 'sage-leaf',
    name: 'Sage Leaf',
    token: '--color-accent-sage',
    hex: '#5F6F4E',
    note: 'Foliage depth',
  },
  {
    id: 'ink-brown',
    name: 'Ink Brown',
    token: '--color-ink',
    hex: '#2B2620',
    note: 'Body & shadows',
  },
  {
    id: 'warm-wood',
    name: 'Warm Wood',
    token: '--color-wood',
    hex: '#8A6248',
    note: 'Frames & dividers',
  },
];
