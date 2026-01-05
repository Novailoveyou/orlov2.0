import 'server-only'

import { View } from '@/shared/components/view'
import { IDS } from '@/shared/constants'
import { Terms } from '@/widgets/Terms'

export function TermsView() {
  return (
    <View id={IDS.terms}>
      <Terms />
    </View>
  )
}
