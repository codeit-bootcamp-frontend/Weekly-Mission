/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["codeit-front.s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
