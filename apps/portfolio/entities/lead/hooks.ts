'use client'
import 'client-only'

import { ym } from '@/shared/components/yandex-metrika'
import { sendGTMEvent } from '@/shared/components/google-tag-manager'
import { Lead } from './model'
// import { mutationPost } from '@/shared/actions'
import { useMutation } from '@/shared/api'
import { sendLeadToTelegram } from './actions'

const onSuccess = (lead: Lead) => {
  // console.log('lead: ', lead)

  ym.setUserId(lead.id)
  ym.firstPartyParams({
    email: lead.email,
    first_name: lead.username,
    last_name: '',
    phone_number: lead.phoneNumber,
    yandex_cid: lead.id,
  })
  ym.reachGoal('lead')
  sendGTMEvent({ event: 'lead', value: 'xyz' })
}

export const useLead = () =>
  useMutation('/lead', sendLeadToTelegram, {
    entity: 'lead',
    onSuccess,
  })
