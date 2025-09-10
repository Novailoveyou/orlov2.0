import { Button } from '@repo/ui/components/button'
import { Page } from '@repo/ui/components/page'
import { APP_NAME } from '../shared/constants'

export default function HomePage({ params }: PageProps<'/'>) {
  return (
    <Page>
      <h1 className='text-3xl'>{APP_NAME}</h1>
      <Button appName={APP_NAME} className='bg-amber-950'>
        Button
      </Button>
    </Page>
  )
}
