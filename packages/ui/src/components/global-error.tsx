'use client'

import { useEffect } from 'react'

export function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // TODO: Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h1>Something went completely wrong!</h1>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
