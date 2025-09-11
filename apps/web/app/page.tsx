import 'server-only'

import { Button } from '@repo/ui/components/legacy/button'
import { Page } from '@repo/ui/components/page'
import { APP_NAME } from '../shared/constants'
import { H1 } from '@repo/ui/tags/h1'
import { Section } from '@repo/ui/tags/section'
import { Container } from '@repo/ui/components/container'

export default function HomePage({ params }: PageProps<'/'>) {
  return (
    <Page id='home'>
      <Section id='hero'>
        <Container>
          <H1 className='text-7xl'>{APP_NAME}</H1>
          <Button appName={APP_NAME}>Button</Button>
        </Container>
      </Section>
    </Page>
  )
}
