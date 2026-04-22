/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.100.225', '192.168.100.162', '192.168.1.216'],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
