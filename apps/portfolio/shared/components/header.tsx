import 'server-only'

import { Header as HeaderBase } from '@repo/ui/components/tags/header'
import { ModeToggle } from '@/shared/components/mode-toggle'
import { Logo } from '@/shared/images/logo'

export const Header = () => (
  <HeaderBase className='flex flex-wrap justify-between items-center gap-4 mb-6'>
    {/* lang toggle here */}
    <Logo />
    <ModeToggle />
  </HeaderBase>
)
