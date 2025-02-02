import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  keyframes: {
    blink: {
      "0%, 100%": { opacity: 1 },
      "50%": { opacity: 0 },
    },
  },
  
};

export default nextConfig;
