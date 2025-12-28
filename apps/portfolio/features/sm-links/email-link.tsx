import 'server-only'

import { useTranslations } from 'next-intl'
import { ExternalLink } from '@/shared/components/external-link'
import { LINKS } from '@/shared/constants'

export const EmailExternalLink = () => {
  const t = useTranslations('features.sm-links')
  return (
    <ExternalLink
      href={LINKS.email.default}
      aria-label={t('emailLink.ariaLabel')}>
      {t('emailLink.title')}
    </ExternalLink>
  )
}
