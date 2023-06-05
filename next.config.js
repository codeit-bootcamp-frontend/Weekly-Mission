/* eslint-disable import/no-extraneous-dependencies */
const {
  createVanillaExtractPlugin,
} = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codeit-images.codeit.com',
        port: '',
        pathname: '/badges/**',
      },
      {
        protocol: 'https',
        hostname: 'codeit-frontend.codeit.com',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'reactjs.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/tanstack/**',
      },
      {
        protocol: 'https',
        hostname: 'storybook.js.org',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'testing-library.com',
        port: '',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'static.cdninstagram.com',
        port: '',
        pathname: '/rsrc.php/**',
      },
      {
        protocol: 'https',
        hostname: 's.pstatic.net',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
  async exportPathMap() {
    return {
      '/shared': { page: '/shared', query: { name: 'shared' } },
      '/folder': { page: '/folder', query: { name: 'folder' } },
    };
  },
};

module.exports = withVanillaExtract(nextConfig);
