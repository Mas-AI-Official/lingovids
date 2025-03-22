const nextConfig = {
  reactStrictMode: true,
  experimental: {}, // Removed deprecated options
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  env: {
    NEXT_PUBLIC_API_URL: "https://lingovids.mas-ai.co/api",
  },
};

module.exports = nextConfig;
