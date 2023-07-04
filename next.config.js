const nextConfig = {
  env: {
    BASE_URL:
      process.env.NODE_ENV === "development" // 시스템 환경 변수, 개발 환경 정의
        ? "http://localhost:3000" // 개발환경이면
        : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`, //개발환경이 아니면 vercel 정의되어있는 url
    SERVER_BASE_URL: "https://bootcamp-api.codeit.kr", // server side일때는 rewrite가 적용 안됨
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
      {
        source: "/api/:path*",
        destination: "https://bootcamp-api.codeit.kr/api/:path*", // 수정된 목적지 URL
      },
    ];
  },
};

module.exports = nextConfig;
