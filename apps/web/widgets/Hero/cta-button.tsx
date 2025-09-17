'use client'
import 'client-only'

import { Button } from '@repo/ui/components/shadcnui/button'
import { App } from '@repo/database'

export function CTAButton({ app }: { app: App | null }) {
  return (
    <>
      <Button>Button {app?.name}</Button>
    </>
  )
}
