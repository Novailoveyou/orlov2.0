import 'server-only'
import { RiTelegram2Line } from 'react-icons/ri'
import { Button } from '@/shared/components/button'
import { Icon } from '@/shared/components/icon'
import { ExternalLink } from '@/shared/components/external-link'

export const ContactButton = () => {
  // TODO: make button fallback to https://t.me/novailoveyou if tg:// protocol is not supported or fallback to phone number is case or russian locale or email (whatsapp/fb messager etc) for other locales
  return (
    <Button variant='ghost' size='icon' className='px-2' asChild>
      <ExternalLink href='tg://resolve?domain=novailoveyou'>
        {/* <ExternalLink href='https://t.me/novailoveyou'> */}
        {/* TODO: add aria label */}
        <Icon
          width='w-[1.2rem]'
          height='h-[1.2rem]'
          Icon={RiTelegram2Line}
          aria-label='share'
        />
      </ExternalLink>
    </Button>
  )
}
