import 'server-only'

import { useTranslations } from 'next-intl'

export const MoreLink = () => {
  const t = useTranslations('features.sm-links')
  return t('moreLink.title')
}
