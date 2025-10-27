'use client'
import 'client-only'
import { createFetcher } from '@repo/api/client'

export const { fetcher: clientFetcher } = createFetcher()
