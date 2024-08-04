const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? 'https://jhleelego.github.io/rankingking/' : '',
  reactStrictMode: true,
}

export default nextConfig
