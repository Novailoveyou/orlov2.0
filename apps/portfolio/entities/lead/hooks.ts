'use client'
import 'client-only'

import { ym } from '@/shared/yandex-metrika'
import { Lead } from './model'
import { mutationPost } from '@/shared/actions'
import { useMutation } from '@/shared/api'

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

export const useLead = () =>
  useMutation('/lead', mutationPost<Lead, Lead>, {
    entity: 'lead',
    onSuccess,
  })
