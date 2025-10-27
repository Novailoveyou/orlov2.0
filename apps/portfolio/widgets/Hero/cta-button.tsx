'use client'
import 'client-only'

import { Button } from '@repo/ui/components/shadcnui/button'
import type { App } from '@repo/database'
import { useLead } from '@/entities/lead/hooks'

export function CTAButton({ app }: { app: App | null }) {
  const { lead, triggerLead } = useLead()

  console.log('lead: ', lead)
  return (
    <Button
      onClick={() =>
        triggerLead({
          id: '123',
          phoneNumber: '',
          description: '',
          email: '',
          telegram: '',
          username: '',
        })
      }>
      Button {app?.name}
    </Button>
  )
}
