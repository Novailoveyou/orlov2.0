import 'server-only'

import { View } from '@repo/ui/components/view'
import { Container } from '@/shared/components/container'
import { Game } from '@/widgets/game'
import { LoginForm } from '@/entities/player/ui/login-form'
import { cookies } from 'next/headers'

export async function HomeView() {
  const cookieStore = await cookies()
  const username = cookieStore.get('username')

  return (
    <View id='home-view' className='flex flex-col flex-1 w-full'>
      <Container className='flex flex-col flex-1 justify-center items-center'>
        {username?.value ? <Game username={username.value} /> : <LoginForm />}
      </Container>
    </View>
  )
}
