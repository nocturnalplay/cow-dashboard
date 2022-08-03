/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    // url:"https://cow-society.netlify.app/"
    url: "http://localhost:3000"
  }
}

module.exports = nextConfig
