import { Button } from '@/shared/components/button'
import { Icon } from '@/shared/components/icon'
import { RiNotificationLine } from 'react-icons/ri'

export const NotificationsButton = () => {
  return (
    <Button variant='ghost' size='icon' className='px-2'>
      {/* TODO: add aria label */}
      <Icon
        width='w-[1.2rem]'
        height='h-[1.2rem]'
        Icon={RiNotificationLine}
        aria-label='notifications'
      />
      {/* <TelegramShareButton url='https://orlov.app'>
        <TelegramIcon />
      </TelegramShareButton>
      <FacebookShareCount url='https://orlov.app' /> */}
    </Button>
  )
}
