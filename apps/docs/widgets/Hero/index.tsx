import 'server-only'

import { Container } from '@repo/ui/components/container'
import { H1 } from '@repo/ui/components/tags/h1'
import { Section } from '@repo/ui/components/tags/section'
import { prisma } from '@repo/database'
import { APP_NAME } from '@/shared/constants'
import { CTAButton } from './cta-button'

export async function Hero() {
  const error = await prisma.error.findFirst()

  return (
    <Section id='hero'>
      <Container>
        <H1 className='text-3xl'>{APP_NAME}</H1>
        <CTAButton error={error} />
      </Container>
    </Section>
  )
}
