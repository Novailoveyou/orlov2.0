'use client'
import 'client-only'
import { createFetcher } from './base'
import { useFetcher } from './hooks/useFetcher'
import { useMutation } from './hooks/useMutation'
import { SWRConfig } from 'swr'

export const createClientFetcher = (
  ...params: Parameters<typeof createFetcher>
) => {
  const {
    fetcher: clientFetcher,
    mutation: clientMutation,
    handleAPIError: handleClientAPIError,
  } = createFetcher(...params)

  return {
    clientFetcher,
    clientMutation,
    handleClientAPIError,
    SWRConfig,
    useFetcher,
    useMutation,
  } as const
}
