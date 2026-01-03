import 'server-only'

import { useTranslations } from 'next-intl'
import { Link } from '@/shared/components/link'
import { LINKS } from '@/shared/constants'

export const TermsOfService = () => {
  const t = useTranslations('features.legal-links')
  return <Link href={LINKS.terms}>{t('termsOfService')}</Link>
}
