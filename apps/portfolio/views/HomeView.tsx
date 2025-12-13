import 'server-only'

import { Hero } from '@/widgets/Hero'
import { View } from '@/shared/components/view'

export function HomeView() {
  return (
    <View id='home'>
      <Hero />
    </View>
  )
}
