/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "codeit-frontend.codeit.com",
      "reactjs.org",
      "assets.vercel.com",
      "github.com",
      "storybook.js.org",
      "testing-library.com",
      "static.cdninstagram.com",
      "s.pstatic.net",
      "codeit-images.codeit.com", // folder user image
      "codeit-front.s3.ap-northeast-2.amazonaws.com", // login user image
    ],
  },
};

module.exports = nextConfig;
