'use client'
import 'client-only'

import { createClientFetcher, createUseFetchers } from '@repo/api/client'

export const { useGet } = createUseFetchers(createClientFetcher())
