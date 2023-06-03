/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "codeit-front.s3.ap-northeast-2.amazonaws.com",
      "bootcamp-api.codeit.kr",
      "codeit-frontend.codeit.com",
      "reactjs.org",
      "assets.vercel.com",
      "github.com",
      "storybook.js.org",
      "testing-library.com",
      "static.cdninstagram.com",
      "s.pstatic.net",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bootcamp-api.codeit.kr",
        port: "",
        pathname: "/api/sample/user",
      },
    ],
  },

  onDemandEntries: {
    maxInactiveAge: 3600 * 1000,
    pagesBufferLength: 20,
  },
};

module.exports = nextConfig;
