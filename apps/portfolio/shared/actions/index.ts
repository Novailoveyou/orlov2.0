import 'server-only'
import { createServerFetcher } from '@repo/api/server'

export const { serverFetcher, serverMutation } = createServerFetcher()
