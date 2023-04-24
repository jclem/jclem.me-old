import withMDX from '@next/mdx'
import {withContentlayer} from 'next-contentlayer'

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

export default nextConfig
