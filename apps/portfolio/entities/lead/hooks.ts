'use client'
import 'client-only'

import useSWRMutation from 'swr/mutation'

import { ym } from '@/shared/yandex-metrika'
import { serverFetcher } from '@/shared/actions'
import { Lead } from './model'

const onSuccess = (lead: Lead) => {
  ym.setUserId(lead.id)
  ym.firstPartyParams({
    email: lead.email,
    first_name: lead.username,
    last_name: '',
    phone_number: lead.phoneNumber,
    yandex_cid: lead.id,
  })
  ym.reachGoal('lead')
}

export const useLead = () => {
  const {
    data: lead = null,
    error: leadError,
    isMutating: isLeadMutating,
    reset: resetLead,
    trigger: triggerLead,
  } = useSWRMutation('/lead', serverFetcher.mutation.post<Lead, Lead>, {
    onSuccess,
  })

  return {
    lead,
    leadError,
    isLeadMutating,
    resetLead,
    triggerLead,
  }
}
