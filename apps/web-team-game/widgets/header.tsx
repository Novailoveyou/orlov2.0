import 'server-only'

import { Header as HeaderBase } from '@repo/ui/components/tags/header'
import { cookies } from 'next/headers'
import { Container } from '@/shared/components/container'
import { Button } from '@repo/ui/components/shadcnui/button'
import { logout } from '@/entities/player/actions/logout'
import { Div } from '@repo/ui/components/tags/div'
import { Players } from '@/entities/player/ui/players'

export const Header = async () => {
  const cookieStore = await cookies()
  const username = cookieStore.get('username')

  if (!username?.value) return null

  return (
    <HeaderBase className='py-4'>
      <Container className='flex justify-between items-center gap-6'>
        <Players username={username.value} />
        <Div className='flex items-center gap-4 ml-auto'>
          <Button onClick={logout}>Выйти</Button>
        </Div>
      </Container>
    </HeaderBase>
  )
}
