import { NextConfig } from 'next'
import nextConfigBase from '@repo/next-config'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

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

export default withNextIntl(nextConfig)
