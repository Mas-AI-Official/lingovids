const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  env: { NEXT_PUBLIC_API_URL: "https://lingovids.mas-ai.co/api" },
};

module.exports = nextConfig;
