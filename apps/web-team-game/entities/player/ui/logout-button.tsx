'use client'
import 'client-only'

import { Button } from '@repo/ui/components/shadcnui/button'
import { useLogout } from '../hooks/useLogout'

export const LogoutButton = () => {
  const { isLogoutMutating, triggerLogout } = useLogout()
  return (
    <Button onClick={triggerLogout}>
      {isLogoutMutating ? 'Загрузка...' : 'Выйти'}
    </Button>
  )
}
