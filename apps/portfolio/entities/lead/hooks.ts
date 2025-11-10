'use client'
import 'client-only'

import useSWRMutation from 'swr/mutation'

import { ym } from '@/shared/yandex-metrika'
import { Lead } from './model'
import { serverMutation } from '@/shared/actions'
import { useGet } from '@/shared/hooks'

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
  const { testLead } = useGet<string, 'testLead'>('/lead', {
    entity: 'testLead',
  })

  console.log('testLead: ', testLead)

  const {
    data: lead = null,
    error: leadError,
    isMutating: isLeadMutating,
    reset: resetLead,
    trigger: triggerLead,
  } = useSWRMutation('/lead', serverMutation.post<Lead, Lead>, {
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
