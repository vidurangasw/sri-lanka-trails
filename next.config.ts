import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow all local images; add remote domains here if needed
    // e.g. remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]
    remotePatterns: [],
  },
};

export default nextConfig;
