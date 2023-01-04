/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/profile_images/*',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/media/*',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/profile_banners/*',
      },
    ],
  },
};
module.exports = nextConfig;
