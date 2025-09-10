import type { NextConfig } from 'next'

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
    incomingRequests: true,
  },
  experimental: {
    webVitalsAttribution: ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'],
    scrollRestoration: true,
    appDocumentPreloading: true,
    cssChunking: true,
    optimizeServerReact: true,
    optimisticClientCache: true,
  },
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
} as const satisfies NextConfig

export default nextConfig
