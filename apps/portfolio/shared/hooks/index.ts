'use client'
import 'client-only'

import { createClientFetcher } from '@repo/api/client'

export const { clientFetcher, clientMutation } = createClientFetcher()
