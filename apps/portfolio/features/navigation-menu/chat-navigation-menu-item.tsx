import 'server-only'
import { useTranslations } from 'next-intl'
import { RiChat3Line } from 'react-icons/ri'
import { LINKS } from '@/shared/constants'
import { NavigationMenuItem } from './navigation-menu-item'
export const ChatMenuItem = () => {
  const t = useTranslations('features.navigation-menu-links')
  return (
    <NavigationMenuItem
      href={LINKS.chat}
      pending={t('loading')}
      Icon={RiChat3Line}
      aria-label={t('chat')}>
      {t('chat')}
    </NavigationMenuItem>
  )
}
