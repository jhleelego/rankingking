const prefix =
  process.env.NODE_ENV === 'production'
    ? 'https://jhleelego.github.io/rankingking/'
    : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: prefix,
}

export default nextConfig
