import 'server-only'

import { Hero } from '@/widgets/Hero'
import { View } from '@/shared/components/view'
import { IDS } from '@/shared/constants'

export function HomeView() {
  return (
    <View id={IDS.home}>
      <Hero />
    </View>
  )
}
