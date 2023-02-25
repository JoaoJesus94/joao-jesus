/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ['placekitten.com', 'res.cloudinary.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
