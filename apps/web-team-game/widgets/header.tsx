import { Header as HeaderBase } from '@repo/ui/components/tags/header'
import { cookies } from 'next/headers'
import { Container } from '@/shared/components/container'
import { Button } from '@repo/ui/components/shadcnui/button'
import { logout } from '@/app/actions/logout'
import { Div } from '@repo/ui/components/tags/div'
import { Span } from '@repo/ui/components/tags/span'

export const Header = async () => {
  const cookieStore = await cookies()
  const username = cookieStore.get('username')

  if (!username?.value) return null

  return (
    <HeaderBase className='mb-6 py-4'>
      <Container className='flex justify-between items-center gap-4'>
        <Span>{username.value}</Span>
        <Span className='inline-block mx-auto'>WEB26</Span>
        <Div className='flex items-center gap-4'>
          <Button onClick={logout}>Выйти</Button>
        </Div>
      </Container>
    </HeaderBase>
  )
}
