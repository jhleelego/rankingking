const prefix = process.env.NODE_ENV === 'production' ? 'https://rankingking.co.kr/' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: prefix,
}

export default nextConfig
