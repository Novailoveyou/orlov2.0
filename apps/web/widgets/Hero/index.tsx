import 'server-only'

import { Container } from '@repo/ui/components/container'
import { H1 } from '@repo/ui/components/tags/h1'
import { Section } from '@repo/ui/components/tags/section'
import { APP_NAME } from '@/shared/constants'
import { CTAButton } from './cta-button'
import { prisma } from '@repo/database'
import { ExampleName } from './example-name'

export async function Hero() {
  const app = await prisma.app.findFirst()

  return (
    <Section id='hero'>
      <Container>
        <H1 className='text-7xl'>{APP_NAME}</H1>
        <CTAButton app={app} />
        <ExampleName />
      </Container>
    </Section>
  )
}
