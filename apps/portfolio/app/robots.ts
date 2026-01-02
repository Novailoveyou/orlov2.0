import 'server-only'

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // allow: '/',
        disallow: '/',
      },
      {
        userAgent: 'Googlebot',
        // allow: ['/'],
        disallow: '/',
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/'],
      },
    ],
    // sitemap: 'https://acme.com/sitemap.xml',
  }
}
