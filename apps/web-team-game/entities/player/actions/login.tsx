'use server'
import 'server-only'

import { cookies } from 'next/headers'
import prisma from '@/prisma/client'

export async function login(key: string, { arg: username }: { arg: string }) {
  const cookieStore = await cookies()

  const existingPlayer = await prisma.player.findUnique({
    where: { username },
  })

  if (existingPlayer) {
    cookieStore.set('username', username)
    return true
  }

  await prisma.player.create({
    data: { username },
  })

  cookieStore.set('username', username)

  return true
}
