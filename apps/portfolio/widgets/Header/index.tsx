import 'server-only'

import { Header as HeaderBase } from '@/shared/components/header'
import { Logo } from '@/features/logo'
import { ModeToggle } from '@/features/mode-toggle'
import { LangToggle } from '@/features/lang-toggle'
import { Suspense } from 'react'

export const Header = () => {
  return (
    <HeaderBase className='flex flex-wrap justify-between items-center gap-4 mb-6 pt-5'>
      {/* TODO: figure this out without using suspense */}
      <Suspense>
        <LangToggle />
      </Suspense>
      <Logo />
      <ModeToggle />
    </HeaderBase>
  )
}
