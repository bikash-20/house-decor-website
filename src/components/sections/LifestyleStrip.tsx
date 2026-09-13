import Image from 'next/image';
import ScrollReveal from '@/components/motion/ScrollReveal';
import BotanicalDivider from '@/components/ui/BotanicalDivider';

/**
 * Lifestyle / inspiration strip — secondary imagery in a horizontal scroll-feel row.
 * PRD §3.2.3.
 */
export default function LifestyleStrip() {
  const images = [
    { src: '/bedroom-1.jpg', alt: 'Wisteria bedroom reading nook' },
    { src: '/bedroom-2.jpg', alt: 'Linen bedroom with stone wall' },
    { src: '/bedroom-4.jpg', alt: 'Plaster-textured wall with cream drapes' },
    { src: '/bedroom-6.jpg', alt: 'Wisteria-patterned headboard wall' },
    { src: '/image-1.jpg', alt: 'Layered plaster bedroom with soft drape' },
    { src: '/image-9.jpg', alt: 'Quiet bedroom corner in warm afternoon light' },
    { src: '/image-10.jpg', alt: 'Stone-toned bedroom with low bed and linen' },
  ];

  return (
    <section
      aria-labelledby="lifestyle-heading"
      className="surface-base relative overflow-hidden py-28 md:py-36"
    >
      <div className="grain-overlay" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ScrollReveal>
          <p data-reveal className="eyebrow">
            In situ
          </p>
          <h2
            id="lifestyle-heading"
            data-reveal
            className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ink md:text-5xl"
          >
            How the frames <em className="text-wisteria">live.</em>
          </h2>
        </ScrollReveal>

        <BotanicalDivider className="my-14" />
      </div>

      <ScrollReveal
        as="ul"
        staggerChildren
        className="grid grid-cols-2 gap-4 px-6 md:grid-cols-4 lg:grid-cols-7 md:px-10 lg:gap-6"
      >
        {images.map((img, i) => (
          <li
            key={img.src}
            data-reveal
            className={[
              'relative overflow-hidden rounded-[var(--radius-md)] shadow-[0_8px_24px_-12px_rgba(43,38,32,0.18)]',
              i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-[3/5] md:mt-12',
            ].join(' ')}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </li>
        ))}
      </ScrollReveal>
    </section>
  );
}
