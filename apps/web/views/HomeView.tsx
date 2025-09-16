import 'server-only'

import { Hero } from '@/widgets/Hero'
import { View } from '@repo/ui/components/view'

export function HomeView() {
  return (
    <View id='home'>
      <Hero />
    </View>
  )
}
