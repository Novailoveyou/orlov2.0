import { HomeView } from '@/views/home-view'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense>
      <HomeView />
    </Suspense>
  )
}
