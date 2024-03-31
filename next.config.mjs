/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: 'digital-capi.joelapablaza.com.ar',
      },
      {
        protocol: 'https',
        hostname: 'digital-capi.joelapablaza.com.ar',
      },
    ],
  },
};

export default nextConfig;
