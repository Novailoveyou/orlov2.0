'use client'
import 'client-only'

import { useLead } from '@/entities/lead/hooks'
import { Button } from '@/shared/components/button'
import { ComponentProps, useCallback, useEffect, useState } from 'react'

export const LeadButton = ({
  children,
}: Pick<ComponentProps<typeof Button>, 'children'>) => {
  // const [retryCount, setRetryCount] = useState(0)

  const { lead, isLeadMutating, leadError, triggerLead } = useLead()

  const isError = !isLeadMutating && leadError

  const handleLead = useCallback(
    () =>
      triggerLead({
        id: '123',
        phoneNumber: '',
        description: '',
        email: '',
        telegram: '',
        username: '',
      }),
    [triggerLead],
  )

  // useEffect(() => {
  //   const handleRetry = () => {
  //     handleLead()
  //     setRetryCount(prev => prev + 1)
  //   }

  //   let timeout: ReturnType<typeof setTimeout>

  //   if (leadError && retryCount < 3) {
  //     timeout = setTimeout(handleRetry, 3000)
  //   }

  //   return () => {
  //     if (timeout) clearTimeout(timeout)
  //   }
  // }, [leadError, retryCount, handleLead])

  // TODO: handle retries. 3 retries, each in 3 seconds, then if not 200, save data to localStorage to send to server when connection comes online
  // TODO: handle error state
  return (
    <Button isLoading={isLeadMutating} error={isError} onClick={handleLead}>
      {isError ? 'Try again' : children}
    </Button>
  )
}
