'use client'
import 'client-only'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import {
  utm_source,
  utm_medium,
  utm_campaign,
  utm_content,
  utm_term,
} from './constants'

/**
 * @description  A hook to get UTM parameters from the URL and store them in local storage.
 */
export const useUtms = () => {
  const searchParams = useSearchParams()

  const params = new URLSearchParams(searchParams.toString())

  const paramUtmSource = params.get(utm_source)
  const paramUtmMedium = params.get(utm_medium)
  const paramUtmCampaign = params.get(utm_campaign)
  const paramUtmContent = params.get(utm_content)
  const paramUtmTerm = params.get(utm_term)

  const [utmSource, setUtmSource] = useLocalStorage(utm_source, paramUtmSource)

  const [utmMedium, setUtmMedium] = useLocalStorage(utm_medium, paramUtmMedium)

  const [utmCampaign, setUtmCampaign] = useLocalStorage(
    utm_campaign,
    paramUtmCampaign,
  )

  const [utmContent, setUtmContent] = useLocalStorage(
    utm_content,
    paramUtmContent,
  )

  const [utmTerm, setUtmTerm] = useLocalStorage(utm_term, paramUtmTerm)

  useEffect(() => {
    if (paramUtmSource) setUtmSource(paramUtmSource)
    if (paramUtmMedium) setUtmMedium(paramUtmMedium)
    if (paramUtmCampaign) setUtmCampaign(paramUtmCampaign)
    if (paramUtmContent) setUtmContent(paramUtmContent)
    if (paramUtmTerm) setUtmTerm(paramUtmTerm)
  }, [
    paramUtmSource,
    setUtmSource,
    paramUtmMedium,
    setUtmMedium,
    paramUtmCampaign,
    setUtmCampaign,
    paramUtmContent,
    setUtmContent,
    paramUtmTerm,
    setUtmTerm,
  ])

  return {
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    utmTerm,
  }
}
