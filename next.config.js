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
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api.notion.com/v1/databases/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
