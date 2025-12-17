import 'server-only'

import { HomeView } from '@/views/home-view'

export default function HomePage({ params }: PageProps<'/'>) {
  return <HomeView />
}
