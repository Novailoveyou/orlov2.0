import 'server-only'

import { Header as HeaderBase } from '@/shared/components/header'
import { Logo } from '@/features/logo'
import { ModeToggle } from '@/features/mode-toggle'
import { LangToggle } from '@/features/lang-toggle'

export const Header = () => {
  return (
    <HeaderBase className='flex flex-wrap items-center justify-between gap-4 mb-6'>
      <LangToggle />
      <Logo />
      <ModeToggle />
    </HeaderBase>
  )
}
