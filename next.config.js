/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://i.imgur.com', 'i.imgur.com', '*'],
},
  // env: {
  //   PUBLIC_URL: process.env.PUBLIC_URL,
  // }
}

module.exports = nextConfig
