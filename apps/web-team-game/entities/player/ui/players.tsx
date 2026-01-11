'use client'
import 'client-only'
import { useGetPlayers } from '../hooks/useGetPlayers'

export const Players = ({ username }: { username: string }) => {
  const { players } = useGetPlayers()

  if (!players) return null

  return players
    .filter(player => player.username !== username)
    .map(player => player.username)
}
