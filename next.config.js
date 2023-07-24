/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://bootcamp-api.codeit.kr/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
