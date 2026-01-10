import 'server-only'

import { View } from '@repo/ui/components/view'
import { Container } from '@/shared/components/container'
import { Game } from '@/widgets/game'
import { LoginForm } from '@/widgets/login-form'
import { cookies } from 'next/headers'

export async function HomeView() {
  const cookieStore = await cookies()
  const username = cookieStore.get('username')

  return (
    <View id='home-view' className='w-full'>
      <Container className='flex flex-col justify-center items-center min-h-dvh'>
        {username?.value ? <Game /> : <LoginForm />}
      </Container>
    </View>
  )
}
