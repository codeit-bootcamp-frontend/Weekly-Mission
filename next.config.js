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
  env: {
    BASE_URL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : `${process.env.NEXT_PUBLIC_VERCEL_URL}`,
  },
  async rewrites() {
    return [
      {
        source: "/users/:path*",
        destination: "https://bootcamp-api.codeit.kr/api/users/:path*",
      },
      {
        source: "/folders/:path*",
        destination: "https://bootcamp-api.codeit.kr/api/folders/:path*",
      },
      {
        source: "/links/:path*",
        destination: "https://bootcamp-api.codeit.kr/api/links/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
