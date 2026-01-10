import { Header as HeaderBase } from '@repo/ui/components/tags/header'
import { cookies } from 'next/headers'
import { Container } from '@/shared/components/container'
import { Button } from '@repo/ui/components/shadcnui/button'
import { logout } from '@/app/actions/logout'

export const Header = async () => {
  const cookieStore = await cookies()
  const username = cookieStore.get('username')

  if (!username?.value) return null

  return (
    <HeaderBase className='mb-6 py-4'>
      <Container className='flex justify-end items-center gap-4'>
        {username.value}
        <Button onClick={logout}>Выйти</Button>
      </Container>
    </HeaderBase>
  )
}
