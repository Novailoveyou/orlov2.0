'use client'
import 'client-only'
import { createFetcher } from '@repo/api'

export const { fetcher: clientFetcher } = createFetcher()
