'use server'
import 'server-only'

import prisma from '@/prisma/client'

export async function getQNAs() {
  const QNAs = await prisma.qNA.findMany()

  return QNAs
}
