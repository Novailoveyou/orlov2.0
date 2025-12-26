import 'server-only'

import { Hero } from '@/widgets/Hero'
import { View } from '@/shared/components/view'
import { IDS } from '@/shared/constants'
import { useTranslations } from 'next-intl'

export function HomeView() {
  const t = useTranslations('HomePage')

  return (
    <View id={IDS.home}>
      {t('title')}
      {/* <Hero /> */}
    </View>
  )
}
