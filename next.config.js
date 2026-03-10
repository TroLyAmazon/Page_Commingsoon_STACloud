/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  allowedDevOrigins: ['192.168.100.162'],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
