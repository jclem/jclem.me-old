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
    }
  })
)

module.exports = nextConfig
