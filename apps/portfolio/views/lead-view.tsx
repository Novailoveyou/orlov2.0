import 'server-only'

import { View } from '@/shared/components/view'
import { IDS } from '@/shared/constants'
// import { LeadButton } from '@/entities/lead/ui'
import { BugReportForm } from '@/entities/lead/temp-ui'
import { Div } from '@/shared/components/div'

export function LeadView() {
  return (
    <View id={IDS.lead}>
      <Div className='flex justify-center items-center'>
        <BugReportForm />
      </Div>
      {/* <LeadButton /> */}
    </View>
  )
}
