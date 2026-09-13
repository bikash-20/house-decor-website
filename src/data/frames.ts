export interface WallFrame {
  id: string;
  src: string;
  alt: string;
  title: string;
  material: string;
  size: string;
  price: string;
  /** Optional grid span modifier */
  size2?: 'sm' | 'md' | 'lg' | 'tall';
}

export const frames: WallFrame[] = [
  {
    id: 'coburg-oval',
    src: '/image-5.jpg',
    alt: 'Hand-finished oval wall frame in warm walnut',
    title: 'Coburg Oval',
    material: 'Walnut, hand-finished',
    size: '60 × 80 cm',
    price: 'From $480',
    size2: 'lg',
  },
  {
    id: 'ash-rectangle',
    src: '/bedroom-2.jpg',
    alt: 'Ash-wood rectangular wall frame with linen mat',
    title: 'Ash Rectangle',
    material: 'Fumed ash, linen mat',
    size: '50 × 70 cm',
    price: 'From $360',
  },
  {
    id: 'oak-arch',
    src: '/bedroom-3.jpg',
    alt: 'Solid oak arch-top wall frame',
    title: 'Oak Arch',
    material: 'Solid oak',
    size: '55 × 75 cm',
    price: 'From $420',
    size2: 'tall',
  },
  {
    id: 'limewash-frame',
    src: '/bedroom-4.jpg',
    alt: 'Limewashed pine frame with warm patina',
    title: 'Limewash Pine',
    material: 'Limewashed pine',
    size: '40 × 60 cm',
    price: 'From $290',
  },
  {
    id: 'cerused-oak',
    src: '/bedroom-6.jpg',
    alt: 'Cerused oak frame with deep shadow reveal',
    title: 'Cerused Oak',
    material: 'Cerused oak, ebonized reveal',
    size: '70 × 90 cm',
    price: 'From $620',
    size2: 'lg',
  },
  {
    id: 'maple-tall',
    src: '/bedroom-8.jpg',
    alt: 'Pale maple frame, tall portrait format',
    title: 'Maple Portrait',
    material: 'Pale maple',
    size: '45 × 90 cm',
    price: 'From $380',
    size2: 'tall',
  },
  {
    id: 'walnut-round',
    src: '/image-2.jpg',
    alt: 'Round walnut wall frame with shadow reveal',
    title: 'Walnut Round',
    material: 'Solid walnut',
    size: '50 × 50 cm',
    price: 'From $340',
  },
  {
    id: 'oak-square',
    src: '/image-3.jpg',
    alt: 'Square oak frame in honey tone',
    title: 'Oak Square',
    material: 'Honey oak',
    size: '60 × 60 cm',
    price: 'From $410',
  },
  {
    id: 'ash-bay',
    src: '/image-4.jpg',
    alt: 'Bay-window ash frame in pale finish',
    title: 'Ash Bay',
    material: 'Fumed ash',
    size: '65 × 85 cm',
    price: 'From $440',
    size2: 'lg',
  },
  {
    id: 'pewter-arch',
    src: '/image-6.jpg',
    alt: 'Pewter-toned arch frame',
    title: 'Pewter Arch',
    material: 'Pewter-finished beech',
    size: '55 × 75 cm',
    price: 'From $395',
    size2: 'tall',
  },
  {
    id: 'birch-pair',
    src: '/image-7.jpg',
    alt: 'Pale birch frame paired with linen mount',
    title: 'Birch Pair',
    material: 'Birch ply, linen mount',
    size: '40 × 50 cm',
    price: 'From $280',
  },
  {
    id: 'rosewood-tall',
    src: '/image-11.jpg',
    alt: 'Tall rosewood frame with deep reveal',
    title: 'Rosewood Tall',
    material: 'Rosewood',
    size: '50 × 100 cm',
    price: 'From $510',
    size2: 'tall',
  },
  {
    id: 'ebony-stripe',
    src: '/image-12.jpg',
    alt: 'Ebonized frame with brass detail strip',
    title: 'Ebony Stripe',
    material: 'Ebonized oak, brass inlay',
    size: '70 × 90 cm',
    price: 'From $680',
    size2: 'lg',
  },
];
