import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import HeroP2 from '@/components/hero/HeroP2';
import FrameCollection from '@/components/sections/FrameCollection';
import LifestyleStrip from '@/components/sections/LifestyleStrip';
import CrossLinkP1 from '@/components/sections/CrossLinkP1';
import { siteConfig } from '@/config/site';

/**
 * PAGE 2 — Wall Frames
 * PRD §3.2
 * Hero image source is swappable via siteConfig.heroPage2.
 */
export default function FramesPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <HeroP2 imageSrc={siteConfig.heroPage2} />
        <FrameCollection />
        <LifestyleStrip />
        <CrossLinkP1 />
      </main>
      <Footer />
    </>
  );
}
