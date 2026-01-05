import 'server-only'

import { IDS } from '@/shared/constants'
import { Section } from '@/shared/components/section'
import { OpenLeadDialogButton } from '@/entities/lead/ui/open-lead-dialog-button'
import { MyName } from '@/features/my-name'
import { Description } from '@/features/description'
import { Suspense } from 'react'
// import { prisma } from '@/shared/database'

export function Hero() {
  // const app = await prisma.app.findFirst()

  return (
    <Section
      id={IDS.hero}
      className='flex flex-col flex-wrap justify-between items-center'>
      <MyName />
      <Description className='mt-8' />
      {/* TODO: figure out a way to go without Suspense here */}
      <Suspense>
        <OpenLeadDialogButton className='mt-8 w-full min-w-52 max-w-[17.6875rem]' />
      </Suspense>
    </Section>
  )
}
