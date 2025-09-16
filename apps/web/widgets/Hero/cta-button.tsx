'use client'
import 'client-only'

import { APP_NAME } from '@/shared/constants'
import { Button } from '@repo/ui/components/shadcnui/button'

export function CTAButton() {
  return <Button>Button {APP_NAME}</Button>
}
