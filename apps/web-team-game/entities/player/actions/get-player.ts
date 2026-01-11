'use server'
import 'server-only'

import prisma from '@/prisma/client'

export async function getPlayer(username: string) {
  const players = await prisma.player.findUnique({
    where: {
      username,
    },
  })

  return players
}
