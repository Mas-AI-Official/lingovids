/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ensure App Router is enabled
  },
  output: "standalone",
  env: {
    API_URL: "https://lingovids.mas-ai.co/api",
  },
};

module.exports = nextConfig;
