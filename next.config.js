/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      minify: true,
    },
  },
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'secure.notion-static.com'],
  },
};

module.exports = nextConfig;
