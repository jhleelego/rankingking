/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? 'https://jhleelego.github.io/rankingking/' : '',
  reactStrictMode: true,
}

export default nextConfig
