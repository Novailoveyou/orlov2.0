'use server'
import 'server-only'

import { cookies } from 'next/headers'

export async function login(username: string) {
  const cookieStore = await cookies()

  cookieStore.set('username', username)

  return true
}
