import 'server-only'

import { P } from '@/shared/components/p'
import { useTranslations } from 'next-intl'

export default function Loading() {
  const t = useTranslations('app.home.loading')
  return <P>{t('loading')}</P>
}
