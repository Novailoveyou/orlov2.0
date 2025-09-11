import 'server-only'

import { Button } from '@repo/ui/components/legacy/button'
import { Page } from '@repo/ui/components/page'
import { APP_NAME } from '../shared/constants'
import { H1 } from '@repo/ui/tags/h1'

export default function HomePage({ params }: PageProps<'/'>) {
  return (
    <Page id='home'>
      <H1 className='text-3xl'>{APP_NAME}</H1>
      <Button appName={APP_NAME} className='bg-amber-950'>
        Button
      </Button>
    </Page>
  )
}
