const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Other configurations...
  keyframes: {
    blink: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0' },
    },
  },
};
