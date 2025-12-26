'use client'
import 'client-only'

import Error from 'next/error'
import { routing } from './_/i18n/routing'

export default function NotFound() {
  return (
    <html lang={routing.defaultLocale}>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  )
}
