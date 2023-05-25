/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,images: {
    remotePatterns: [
      {
        hostname: 'paperplane.com.co',
      },
    ],
  },
};

module.exports = nextConfig;
