'use client'
import 'client-only'
import { createFetcher } from './base'

export const createClientFetcher = (
  ...params: Parameters<typeof createFetcher>
) => {
  const {
    fetcher: clientFetcher,
    mutation: clientMutation,
    handleAPIError: handleClientAPIError,
  } = createFetcher(...params)

  return { clientFetcher, clientMutation, handleClientAPIError } as const
}

export * from './hooks/useFetcher'
export * from './hooks/useMutation'
