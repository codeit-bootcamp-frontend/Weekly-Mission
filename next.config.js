/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "codeit-front.s3.ap-northeast-2.amazonaws.com",
      "bootcamp-api.codeit.kr",
      "codeit-frontend.codeit.com",
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
};

module.exports = nextConfig;
