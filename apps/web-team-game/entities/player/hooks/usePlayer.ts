'use client'
import 'client-only'

// import { mutationPost } from '@/shared/actions'
import { useFetcher } from '@/shared/api'
import { getPlayer } from '../actions/get-player'

export const usePlayer = (username: string) =>
  useFetcher(username, getPlayer, {
    entity: 'player',
    refreshInterval: 1500,
  })
