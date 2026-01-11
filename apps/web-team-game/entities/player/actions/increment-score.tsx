'use server'
import 'server-only'

import prisma from '@/prisma/client'

export async function incrementScore(
  key: string,
  { arg: username }: { arg: string },
) {
  const player = await prisma.player.update({
    where: {
      username,
    },
    data: {
      score: {
        increment: 1,
      },
    },
  })

  return player
}
