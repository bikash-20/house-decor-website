/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [55, 65, 75, 85, 88, 90, 92],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1680, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['gsap'],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
