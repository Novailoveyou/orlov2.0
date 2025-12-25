import 'server-only'

import { Header as HeaderBase } from '@repo/ui/components/tags/header'
import { ModeToggle } from '@/shared/components/mode-toggle'
import { Logo } from '@/shared/images/logo'
import { Link } from '@/shared/components/link'
import { Link as I18NLink } from '@/i18n/navigation'

export const Header = () => (
  <HeaderBase className='flex flex-wrap justify-center items-center gap-4 mb-6'>
    {/* lang toggle here */}
    <I18NLink href='/' locale='ru'>
      ru
    </I18NLink>
    <I18NLink href='/' locale='en'>
      en
    </I18NLink>
    <Logo className='ml-auto' />
    <ModeToggle className='ml-auto' />
  </HeaderBase>
)
