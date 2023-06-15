/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  // webpack(config) {
  //   config.experiments = { ...config.experiments, topLevelAwait: true };
  //   return config;
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ca.slack-edge.com",
        port: "",
        pathname: "/T04T2BTF4F5-U04USNXQGCD-g6985a4deb55-512/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/users/:path*",
        destination: "https://bootcamp-api.codeit.kr/api/users/:path*",
      },
    ];
  },
};
