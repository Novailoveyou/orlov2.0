import 'server-only'

import { createFetcher } from './index'

export const createServerFetcher = (
  ...params: Parameters<typeof createFetcher>
) => {
  const {
    fetcher: serverFetcher,
    mutation: serverMutation,
    handleAPIError: handleServerAPIError,
  } = createFetcher(...params)

  return { serverFetcher, serverMutation, handleServerAPIError } as const
}
