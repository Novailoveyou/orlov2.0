import 'server-only'

import { IDS } from '@/shared/constants'
import { Section } from '@/shared/components/section'
import { LeadButton } from '@/entities/lead/ui'
import { MyName } from '@/features/my-name'
import { Description } from '@/features/description'
// import { prisma } from '@/shared/database'

export function Hero() {
  // const app = await prisma.app.findFirst()

  return (
    <Section id={IDS.hero}>
      <MyName />
      <Description className='mt-8' />
      <LeadButton className='mt-8' />
    </Section>
  )
}
