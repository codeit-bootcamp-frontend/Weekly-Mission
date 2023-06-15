/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
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
};

// const nextConfig = {
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: "/:path*",
//         destination: "https://bootcamp-api.codeit.kr/api/users/:path*",
//       },
//     ];
//   },
// };

// module.exports = nextConfig;
