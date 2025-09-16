'use client'
import 'client-only'

import { Button } from '@repo/ui/components/shadcnui/button'
import { APP_NAME } from '@/shared/constants'
import { Error } from '@repo/database'

export function CTAButton({ error }: { error: Error | null }) {
  return (
    <Button className='bg-amber-950'>
      Button {APP_NAME} {error?.message}
    </Button>
  )
}
