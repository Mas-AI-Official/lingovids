const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: "https://lingovids.mas-ai.co/api",
    NEXT_PUBLIC_GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  },
};
module.exports = nextConfig;
