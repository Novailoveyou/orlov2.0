'use server'
import 'server-only'
import { createFetcher } from '@repo/api/server'

export const { fetcher: serverFetcher } = createFetcher()
