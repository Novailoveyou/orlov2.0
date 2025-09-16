'use client'
import 'client-only'

import { Button } from '@repo/ui/components/shadcnui/button'
import { APP_NAME } from '@/shared/constants'

export function CTAButton() {
  return <Button className='bg-amber-950'>Button {APP_NAME}</Button>
}
