/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a fully static HTML site with `next export` semantics
  output: 'export',
  // Disable image optimization at runtime so exported pages work without Next.js server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
