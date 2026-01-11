'use server'
import 'server-only'

import prisma from '@/prisma/client'

export async function getPlayers() {
  const players = await prisma.player.findMany()

  return players
}
