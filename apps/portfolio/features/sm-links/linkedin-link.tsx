import 'server-only'

import { useTranslations } from 'next-intl'
import { ExternalLink } from '@/shared/components/external-link'
import { LINKS } from '@/shared/constants'

export const LinkedInExternalLink = () => {
  const t = useTranslations('features.sm-links')
  return (
    <ExternalLink
      href={LINKS.external.linkedIn}
      aria-label={t('linkedInLink.ariaLabel')}>
      {t('linkedInLink.title')}
    </ExternalLink>
  )
}
