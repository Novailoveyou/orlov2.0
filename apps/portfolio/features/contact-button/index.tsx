import 'server-only'
import { useLocale } from 'next-intl'
import { isRussianLocale } from '@/shared/utils'
import { RiTelegram2Line } from 'react-icons/ri'
import { Button } from '@/shared/components/button'
import { Icon } from '@/shared/components/icon'

export const ContactButton = () => {
  const locale = useLocale()
  if (isRussianLocale(locale)) return <button>телефон</button>

  // TODO: finish this button
  return (
    <Button variant='ghost' size='icon' className='px-2'>
      {/* TODO: add aria label */}
      <Icon
        width='w-[1.2rem]'
        height='h-[1.2rem]'
        Icon={RiTelegram2Line}
        aria-label='share'
      />
    </Button>
  )
}
