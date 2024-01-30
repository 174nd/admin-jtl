/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }, {
        protocol: 'https',
        hostname: 'demo.themesberg.com',
      }, {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
};

export default nextConfig;