const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
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
  async rewrites() {
    return [
      // {
      //   source: "/fonts/:path*",
      //   destination: "/fonts/:path*",
      // },
      {
        source: "/api/:path*",
        destination: "https://bootcamp-api.codeit.kr/api/:path*", // 수정된 목적지 URL
      },
    ];
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
