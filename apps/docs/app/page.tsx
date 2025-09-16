import 'server-only'

import { HomeView } from '@/views/HomeView'

export default async function HomePage({ params }: PageProps<'/'>) {
  return <HomeView />
}
