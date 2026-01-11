'use server'
import 'server-only'

import { cookies } from 'next/headers'
import prisma from '@/prisma/client'

export async function logout() {
  const cookieStore = await cookies()

  const username = cookieStore.get('username')?.value

  if (!username) return true

  await prisma.player.delete({
    where: { username },
  })

  cookieStore.delete('username')

  return true
}
