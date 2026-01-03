import 'server-only'

import { View } from '@/shared/components/view'
import { IDS } from '@/shared/constants'
// import { LeadButton } from '@/entities/lead/ui'
import { LeadForm } from '@/widgets/LeadForm'

export function LeadView() {
  return (
    <View id={IDS.lead}>
      <LeadForm />
    </View>
  )
}
