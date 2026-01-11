'use client'
import 'client-only'
import { usePlayers } from '../hooks/usePlayers'

export const Players = ({ username }: { username: string }) => {
  const { players } = usePlayers()

  if (!players) return null

  return players
    .filter(player => player.username !== username)
    .map(player => player.username)
}
