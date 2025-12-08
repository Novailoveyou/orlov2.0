import 'server-only'

import { Container } from '@repo/ui/components/container'
import { H1 } from '@repo/ui/components/tags/h1'
import { Section } from '@repo/ui/components/tags/section'
// import { prisma } from '@repo/databcdase'
import { APP_NAME } from '@/shared/constants'
import { CTAButtonExample } from './cta-button-example'
import { CTAButtonExample2 } from './cta-button-example2'
// import { CTAButton } from './cta-button'
// import { ExampleName } from './example-name'

export async function Hero() {
  // const app = await prisma.app.findFirst()

  return (
    <Section id='hero'>
      <Container>
        <H1 className='text-3xl'>{APP_NAME}</H1>
        <CTAButtonExample />
        <CTAButtonExample2 />
        {/* <CTAButton app={app} /> */}
        {/* <ExampleName /> */}
      </Container>
    </Section>
  )
}
