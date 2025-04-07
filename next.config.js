/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pt.quizur.com',
        pathname: '/_image/**',
      },
      {
        protocol: 'https',
        hostname: 'img.quizur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig 