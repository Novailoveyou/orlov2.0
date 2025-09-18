import 'server-only'

import { prisma } from '@repo/database'
import { CTAButton } from './cta-button'
import { ExampleName } from './example-name'
import { Section } from '@repo/ui/components/tags/section'
import { P } from '@repo/ui/components/tags/p'
import { MyName } from '@/shared/components/my-name'
import { Underline } from '@repo/ui/components/underline'

export async function Hero() {
  const app = await prisma.app.findFirst()

  return (
    <Section id='hero'>
      <MyName />
      <P>
        Full Stack Web Developer specializing in{' '}
        <Underline>TypeScript</Underline>
      </P>
      <CTAButton app={app} />
      <ExampleName />
    </Section>
  )
}
