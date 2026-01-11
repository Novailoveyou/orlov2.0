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
    throw new Error('Игрок с таким именем уже есть. Введите другое имя')
  }

  await prisma.player.create({
    data: { username },
  })

  cookieStore.set('username', username)

  return true
}
