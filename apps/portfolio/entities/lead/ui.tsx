'use client'
import 'client-only'

import { useLead } from '@/entities/lead/hooks'
import { Button } from '@/shared/components/button'

export const LeadButton = () => {
  const { lead, triggerLead } = useLead()

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
      Hire Me
    </Button>
  )
}
