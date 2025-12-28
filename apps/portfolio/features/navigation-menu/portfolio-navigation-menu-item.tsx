import 'server-only'
import { useTranslations } from 'next-intl'
import { RiGalleryLine } from 'react-icons/ri'
import { LINKS } from '@/shared/constants'
import { NavigationMenuItem } from './navigation-menu-item'
export const PortfolioNavigationMenuItem = () => {
  const t = useTranslations('features.navigation-menu-links')
  return (
    <NavigationMenuItem
      href={LINKS.portfolio}
      pending={t('loading')}
      Icon={RiGalleryLine}
      aria-label={t('portfolio')}>
      {t('portfolio')}
    </NavigationMenuItem>
  )
}
