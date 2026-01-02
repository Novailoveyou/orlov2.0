import 'server-only'

import { View } from '@/shared/components/view'
import { IDS } from '@/shared/constants'
import { LeadButton } from '@/entities/lead/ui'

export function LeadView() {
  return (
    <View id={IDS.lead}>
      <LeadButton />
    </View>
  )
}
