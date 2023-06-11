const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async rewrites() {
    return [
      {
        source: "/users/:path*",
        destination: "https://bootcamp-api.codeit.kr/api/users/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/folder/0",
        destination: "/folder",
        permanent: true,
      },
    ];
  },
  typescript: {
    // 임시로 설정
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: [
      "codeit-front.s3.ap-northeast-2.amazonaws.com",
      "codeit-images.codeit.com",
      "codeit-frontend.codeit.com",
      "reactjs.org",
      "assets.vercel.com",
      "github.com",
      "storybook.js.org",
      "testing-library.com",
      "static.cdninstagram.com",
      "s.pstatic.net",
      "ca.slack-edge.com",
    ],
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 3600 * 1000, // 1시간 간격
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 20,
  },
};

module.exports = nextConfig;
