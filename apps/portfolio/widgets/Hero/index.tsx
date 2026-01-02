import 'server-only'

import { IDS } from '@/shared/constants'
import { Section } from '@/shared/components/section'
import { OpenLeadDialogButton } from '@/entities/lead/ui'
import { MyName } from '@/features/my-name'
import { Description } from '@/features/description'
// import { prisma } from '@/shared/database'

export function Hero() {
  // const app = await prisma.app.findFirst()

  return (
    <Section
      id={IDS.hero}
      className='flex flex-col flex-wrap justify-between items-center'>
      <MyName />
      <Description className='mt-8' />
      <OpenLeadDialogButton className='mt-8 max-w-1/2' />
    </Section>
  )
}
