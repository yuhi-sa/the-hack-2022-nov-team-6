/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['picsum.photos', 'thumb.ac-illust.com'],
  },
}

module.exports = nextConfig
