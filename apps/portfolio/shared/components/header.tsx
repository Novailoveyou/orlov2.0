import 'server-only'

import { Header as HeaderBase } from '@repo/ui/components/tags/header'
import { ModeToggle } from '@/shared/components/mode-toggle'
import { Logo } from '@/shared/images/logo'
import { LangToggle } from './lang-toggle'
import { Suspense } from 'react'

export const Header = () => {
  return (
    <HeaderBase className='flex flex-wrap justify-center items-center gap-4 mb-6'>
      <Suspense>
        <LangToggle />
      </Suspense>
      {/* <Logo className='ml-auto' /> */}
      <ModeToggle className='ml-auto' />
    </HeaderBase>
  )
}
