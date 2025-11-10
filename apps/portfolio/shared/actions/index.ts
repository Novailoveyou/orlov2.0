import 'server-only'
import { createFetcher } from '@repo/api'

export const { fetcher: serverFetcher, mutation: serverMutation } =
  createFetcher()
