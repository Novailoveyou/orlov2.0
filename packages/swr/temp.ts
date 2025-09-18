'use client'
import 'client-only'

import useSWRMutation from 'swr/mutation'

import { postLeadFetcher } from './actions'
import { useStore } from '@/app/_store'
import { ClientLead } from './model'
import { getGMClientId, getIp } from './utils'
import { useEffect } from 'react'
import { getUserAgent, getWindowUrl } from '@/shared/lib/utils'
import { ym } from '@/widgets/Analytics'
import { useSearchParams } from 'next/navigation'
import { useCurrentLocale } from '@/locales/client'
import { getCurrencyAndOrderPrice } from '@/shared/lib/currency'

export const usePostLead = () => {
  const locale = useCurrentLocale()
  const ip = useStore(state => state.lead.ip)
  const gmClientId = useStore(state => state.lead.gmClientId)
  const utmSource = useStore(state => state.lead.utmSource)
  const utmMedium = useStore(state => state.lead.utmMedium)
  const utmCampaign = useStore(state => state.lead.utmCampaign)
  const utmContent = useStore(state => state.lead.utmContent)
  const utmTerm = useStore(state => state.lead.utmTerm)
  const updateClientLead = useStore(state => state.lead.updateClientLead)
  const clearUtms = useStore(state => state.lead.clearUtms)

  const {
    data: lead = null,
    error: leadError,
    isMutating: leadIsPosting,
    reset: resetPostLead,
    trigger: _postLead,
  } = useSWRMutation('post-lead', postLeadFetcher, {
    onSuccess: lead => {
      if (!lead.success) {
        // handle error
        return
      }

      updateClientLead(lead.data)
      clearUtms()

      ym.setUserId(lead.data.userId)
      ym.firstPartyParams({
        email: lead.data.email,
        first_name: lead.data.name,
        last_name: '',
        phone_number: lead.data.phoneNumber,
        yandex_cid: lead.data.userId,
      })
      ym.reachGoal(
        'lead',
        getCurrencyAndOrderPrice({
          locale,
          orderPriceRub: 500,
        }),
      )
    },
  })

  const postLead = (
    partialLead: Pick<
      ClientLead,
      'formName' | 'name' | 'phoneNumber' | 'email' | 'telegram' | 'description'
    >,
  ) =>
    _postLead({
      ip,
      url: getWindowUrl(),
      userAgent: getUserAgent(),
      ymClientID: ym.getClientId(),
      gmClientId,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
      ...partialLead,
    })

  return {
    lead,
    leadError,
    leadIsPosting,
    resetPostLead,
    postLead,
  }
}

export const useUtms = () => {
  const searchParams = useSearchParams()

  const params = new URLSearchParams(searchParams.toString())

  const utmSource = params.get('utm_source')
  const utmMedium = params.get('utm_medium')
  const utmCampaign = params.get('utm_campaign')
  const utmContent = params.get('utm_content')
  const utmTerm = params.get('utm_term')

  const updateUtms = useStore(state => state.lead.updateUtms)

  useEffect(() => {
    updateUtms({
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
    })
  }, [utmSource, utmMedium, utmCampaign, utmContent, utmTerm, updateUtms])

  return {
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    utmTerm,
  }
}

export const useGMClientId = () => {
  const gmClientId = getGMClientId()

  const updateGMClientId = useStore(state => state.lead.updateGMClientId)

  useEffect(() => {
    updateGMClientId(gmClientId)
  }, [gmClientId, updateGMClientId])

  return gmClientId
}

export const useIp = () => {
  const ip = getIp()

  const updateIp = useStore(state => state.lead.updateIp)

  useEffect(() => {
    updateIp(ip)
  }, [ip, updateIp])

  return ip
}
