/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "codeit-front.s3.ap-northeast-2.amazonaws.com",
      "bootcamp-api.codeit.kr",
      "codeit-frontend.codeit.com",
      "ca.slack-edge.com",
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
