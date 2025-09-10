import { Button } from '@repo/ui/components/button'
import { Page } from '@repo/ui/components/page'
import { APP_NAME } from '../shared/constants'

export default function HomePage({ params }: PageProps<'/'>) {
  return (
    <Page>
      <h1 className='text-7xl'>{APP_NAME}</h1>
      <Button appName={APP_NAME}>Button</Button>
    </Page>
  )
}
