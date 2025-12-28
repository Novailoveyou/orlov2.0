import 'server-only'

// import { prisma } from '@/shared/database'
import { IDS } from '@/shared/constants'
import { Section } from '@/shared/components/section'
import { P } from '@/shared/components/p'
import { LeadButton } from '@/entities/lead/ui'
import { MyName } from '@/features/my-name'
import { useMessages, useTranslations } from 'next-intl'
import { objectKeys } from '@/shared/utils'
import { RichText } from '@/shared/components/rich-text'

export function Hero() {
  // const app = await prisma.app.findFirst()
  const t = useTranslations('widgets.Hero.descriptions')

  const messages = useMessages()
  const descriptionKeys = objectKeys(messages.widgets.Hero.descriptions)

  return (
    <Section id={IDS.hero}>
      <MyName />
      <P>
        {descriptionKeys.map(descriptionKey => (
          <RichText key={descriptionKey} className='inline-block w-full'>
            {tags => t.rich(descriptionKey, tags)}
          </RichText>
        ))}
      </P>
      <LeadButton />
    </Section>
  )
}
