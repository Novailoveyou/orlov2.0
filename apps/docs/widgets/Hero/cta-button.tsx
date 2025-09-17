'use client'
import 'client-only'

import { Button } from '@repo/ui/components/shadcnui/button'
import type { App } from '@repo/database'

export function CTAButton({ app }: { app: App | null }) {
  return <Button className='bg-amber-950'>Button {app?.name}</Button>
}
