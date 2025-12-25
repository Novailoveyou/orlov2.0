import 'server-only'

import { HomeView } from '@/views/HomeView'

export default function HomePage({ params }: PageProps<'/'>) {
  console.log('params: ', params)
  return <HomeView />
}
