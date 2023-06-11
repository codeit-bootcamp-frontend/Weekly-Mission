const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://bootcamp-api.codeit.kr/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codeit-front.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ca.slack-edge.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
