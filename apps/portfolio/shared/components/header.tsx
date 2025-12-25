import 'server-only'

import { Header as HeaderBase } from '@repo/ui/components/tags/header'
import { ModeToggle } from '@/shared/components/mode-toggle'
import { Logo } from '@/shared/images/logo'
import { Link } from '@/shared/components/link'

export const Header = () => (
  <HeaderBase className='flex flex-wrap justify-center items-center gap-4 mb-6'>
    {/* lang toggle here */}
    <Link href='/' locale='ru' pending='Loading...'>
      ru
    </Link>
    <Link href='/' locale='en' pending='Loading...'>
      en
    </Link>
    {/* <Logo className='ml-auto' /> */}
    <ModeToggle className='ml-auto' />
  </HeaderBase>
)
