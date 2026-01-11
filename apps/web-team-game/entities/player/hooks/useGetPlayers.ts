'use client'
import 'client-only'

// import { mutationPost } from '@/shared/actions'
import { useFetcher } from '@/shared/api'
import { getPlayers } from '../actions/get-players'

export const useGetPlayers = () =>
  useFetcher('/players', getPlayers, {
    entity: 'players',
  })
