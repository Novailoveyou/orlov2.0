import 'server-only'

// import { prisma } from '@/shared/database'
import { MyName } from '@/shared/components/my-name'
import { LeadButton } from '@/entities/lead/ui'
import { Section } from '@/shared/components/section'
import { P } from '@/shared/components/p'
import { Underline } from '@/shared/components/underline'
import { i18n } from './constants'
import { Span } from '@/shared/components/span'
import { IDS } from '@/shared/constants'

export async function Hero() {
  // const app = await prisma.app.findFirst()

  return (
    <Section id={IDS.hero}>
      <MyName />
      <P>
        {i18n.descriptions.map(description => (
          <Span key={description}>
            {description} <br />
          </Span>
        ))}
        <Underline>{i18n.typeScript}</Underline>
      </P>
      <LeadButton>{i18n.hireMe}</LeadButton>
    </Section>
  )
}
