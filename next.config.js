/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        // hostname: 'paperplane.com.co',
        hostname: 'thinktrue-bkt.s3.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
