'use client'
import 'client-only'

import useSWRMutation from 'swr/mutation'

import { leadFetcher } from './actions'
import { ym } from '@/shared/yandex-metrika'
import { LEAD_KEY } from './constants'

export const useLead = () => {
  const {
    data: lead = null,
    error: leadError,
    isMutating: leadIsMutating,
    reset: resetLead,
    trigger: triggerLead,
  } = useSWRMutation(LEAD_KEY, leadFetcher, {
    onSuccess: lead => {
      ym.setUserId(lead.data.userId)
      ym.firstPartyParams({
        email: lead.data.email,
        first_name: lead.data.username,
        last_name: '',
        phone_number: lead.data.phoneNumber,
        yandex_cid: lead.data.userId,
      })
      ym.reachGoal('lead')
    },
  })

  return {
    lead,
    leadError,
    leadIsMutating,
    resetLead,
    triggerLead,
  }
}
