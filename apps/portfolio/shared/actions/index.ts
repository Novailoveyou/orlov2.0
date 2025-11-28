'use server'
import 'server-only'
import { createServerFetcher } from '@repo/api/server'

const { serverFetcher, serverMutation } = createServerFetcher()

export const { get, post } = serverFetcher

export const { mutationGet, mutationPost } = serverMutation
