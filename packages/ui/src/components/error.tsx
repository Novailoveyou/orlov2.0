'use client'

import { useEffect } from 'react'
// import NextError from 'next/error'

export function Error({
  title = 'Something went wrong!',
  buttonText = 'Try again',
  error,
  reset,
}: {
  title?: string
  buttonText?: string
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // TODO: Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={reset}>{buttonText}</button>
    </div>
  )
}
