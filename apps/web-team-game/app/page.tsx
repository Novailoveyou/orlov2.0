import { Container } from '@/shared/components/container'
import { HomeView } from '@/views/home-view'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Container className='justify-center items-center'>
      <Suspense>
        <HomeView />
      </Suspense>
    </Container>
  )
}
