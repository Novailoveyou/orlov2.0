import 'server-only'

import { useTranslations } from 'next-intl'
import { ExternalLink } from '@/shared/components/external-link'
import { LINKS } from '@/shared/constants'

export const GithubExternalLink = () => {
  const t = useTranslations('features.sm-links')
  return (
    <ExternalLink
      href={LINKS.external.github}
      aria-label={t('githubLink.ariaLabel')}>
      {t('githubLink.title')}
    </ExternalLink>
  )
}
