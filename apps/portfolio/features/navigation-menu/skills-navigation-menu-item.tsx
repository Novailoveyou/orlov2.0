import 'server-only'
import { useTranslations } from 'next-intl'
import { RiCodeSSlashLine } from 'react-icons/ri'
import { LINKS } from '@/shared/constants'
import { NavigationMenuItem } from './navigation-menu-item'

export const SkillsNavigationMenuItem = () => {
  const t = useTranslations('features.navigation-menu-links')
  return (
    <NavigationMenuItem
      href={LINKS.skills}
      Icon={RiCodeSSlashLine}
      aria-label={t('skills')}>
      {t('skills')}
    </NavigationMenuItem>
  )
}
