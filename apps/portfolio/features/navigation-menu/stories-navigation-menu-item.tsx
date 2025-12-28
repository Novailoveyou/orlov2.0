import 'server-only'
import { useTranslations } from 'next-intl'
import { RiBookLine } from 'react-icons/ri'
import { LINKS } from '@/shared/constants'
import { NavigationMenuItem } from './navigation-menu-item'

export const StoriesMenuItem = () => {
  const t = useTranslations('features.navigation-menu-links')
  return (
    <NavigationMenuItem
      href={LINKS.stories}
      pending={t('loading')}
      Icon={RiBookLine}
      aria-label={t('stories')}>
      {t('stories')}
    </NavigationMenuItem>
  )
}
