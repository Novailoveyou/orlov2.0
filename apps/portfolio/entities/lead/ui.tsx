'use client'
import 'client-only'

import { useLead } from '@/entities/lead/hooks'
import { Button } from '@/shared/components/button'
import { useCallback } from 'react'
import { useTranslations } from 'next-intl'

export const LeadButton = () => {
  // const [retryCount, setRetryCount] = useState(0)
  const t = useTranslations('entities.lead')

  const { isLeadMutating, leadError, triggerLead } = useLead()

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
    <Button
      isLoading={isLeadMutating}
      loadingMessage={t('loading')}
      errorMessage={t('error')}
      error={isError}
      onClick={handleLead}>
      {isError ? t('pleaseTryAgain') : t('hireMe')}
    </Button>
  )
}
