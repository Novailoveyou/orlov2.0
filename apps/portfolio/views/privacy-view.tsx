import 'server-only'

import { View } from '@/shared/components/view'
import { IDS } from '@/shared/constants'
import { Privacy } from '@/widgets/Privacy'

export function PrivacyView() {
  return (
    <View id={IDS.privacy}>
      <Privacy />
    </View>
  )
}
