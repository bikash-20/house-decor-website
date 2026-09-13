import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import HeroP1 from '@/components/hero/HeroP1';
import BrandStatement from '@/components/sections/BrandStatement';
import PaletteShowcase from '@/components/sections/PaletteShowcase';
import MuralGallery from '@/components/sections/MuralGallery';
import RoomSpotlight from '@/components/sections/RoomSpotlight';
import Newsletter from '@/components/sections/Newsletter';
import { siteConfig } from '@/config/site';

/**
 * PAGE 1 — Bedroom & Wall Decor
 * PRD §3.1
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <HeroP1 imageSrc={siteConfig.heroPage1} />
        <BrandStatement />
        <PaletteShowcase />
        <MuralGallery />
        <RoomSpotlight />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
