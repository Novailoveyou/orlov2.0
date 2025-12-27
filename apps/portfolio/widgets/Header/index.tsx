import 'server-only'

import { Suspense } from 'react'
import { Header as HeaderBase } from '@/shared/components/header'
import { Logo } from '@/shared/images/logo'
import { ModeToggle } from '@/features/mode-toggle'
import { LangToggle } from '@/features/lang-toggle'

export const Header = () => {
  return (
    <HeaderBase className='flex flex-wrap items-center justify-center gap-4 mb-6'>
      <LangToggle />
      <Logo className='ml-auto' />
      <ModeToggle className='ml-auto' />
    </HeaderBase>
  )
}
