/** @type {import('next').NextConfig} */
const nextConfig = {
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
