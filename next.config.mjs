const prefix = process.env.NODE_ENV === 'production' ? 'https://rankingking.co.kr/' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: prefix,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_CP_DOMAIN}/:path*`,
      },
    ]
  },
}

export default nextConfig
