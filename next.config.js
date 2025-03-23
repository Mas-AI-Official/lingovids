const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  env: { NEXT_PUBLIC_API_URL: "https://lingovids-backend-454706184716.us-central1.run.app/api" },
};

module.exports = nextConfig;
