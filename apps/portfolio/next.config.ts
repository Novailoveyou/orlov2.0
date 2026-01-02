import { NextConfig } from 'next'
import nextConfigBase from '@repo/next-config'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./app/_/i18n/request.ts')

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  ...nextConfigBase,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/en',
  //     },
  //   ]
  // },
} as const satisfies NextConfig

export default withBundleAnalyzer(withNextIntl(nextConfig))
