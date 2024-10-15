const prefix = process.env.NODE_ENV === 'production' ? 'https://rankingking.co.kr/' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: prefix,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: ':path*',
  //     },
  //   ]
  // },
}

export default nextConfig
