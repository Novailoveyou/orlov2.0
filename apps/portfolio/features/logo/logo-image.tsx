import 'server-only'

import { useTranslations } from 'next-intl'
import { LogoImageStatic } from './logo-image-static'

export const LogoImage = () => {
  const t = useTranslations('features.logo')

  return <LogoImageStatic alt={t('name')} />
}
