import 'server-only'

import { HomeView } from '@/views/HomeView'
import { prisma } from '@repo/database'

export default async function HomePage({ params }: PageProps<'/'>) {
  const error = await prisma.error.findFirst()

  console.log('prisma: ', prisma)
  console.info('error: ', error)

  return <HomeView />
}
