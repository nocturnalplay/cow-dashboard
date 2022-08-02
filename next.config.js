/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    url:"http://192.168.1.7:3000/"
  }
}

module.exports = nextConfig
