/* eslint-disable @typescript-eslint/no-var-requires */

const withMDX = require('@next/mdx')
const {withContentlayer} = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer(
  withMDX()({
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true
    },

    async redirects() {
      return [
        {
          source: '/posts/:slug',
          destination: '/writing/:slug',
          permanent: true
        }
      ]
    }
  })
)

module.exports = nextConfig
