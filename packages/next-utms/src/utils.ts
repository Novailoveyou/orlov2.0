'use client'
import 'client-only'
import {
  utm_source,
  utm_medium,
  utm_campaign,
  utm_content,
  utm_term,
} from './constants'

export const getUtmSource = () => {
  if (typeof localStorage === 'undefined') return null

  const utmSource = localStorage.getItem(utm_source)

  if (utmSource) {
    const utmSourceParsed = JSON.parse(utmSource)

    if (typeof utmSourceParsed === 'string') return utmSourceParsed
  }

  return null
}

export const getUtmMedium = () => {
  if (typeof localStorage === 'undefined') return null

  const utmMedium = localStorage.getItem(utm_medium)
  if (utmMedium) {
    const utmMediumParsed = JSON.parse(utmMedium)
    if (typeof utmMediumParsed === 'string') return utmMediumParsed
  }
  return null
}

export const getUtmCampaign = () => {
  if (typeof localStorage === 'undefined') return null

  const utmCampaign = localStorage.getItem(utm_campaign)
  if (utmCampaign) {
    const utmCampaignParsed = JSON.parse(utmCampaign)
    if (typeof utmCampaignParsed === 'string') return utmCampaignParsed
  }
  return null
}

export const getUtmContent = () => {
  if (typeof localStorage === 'undefined') return null

  const utmContent = localStorage.getItem(utm_content)
  if (utmContent) {
    const utmContentParsed = JSON.parse(utmContent)
    if (typeof utmContentParsed === 'string') return utmContentParsed
  }
  return null
}

export const getUtmTerm = () => {
  if (typeof localStorage === 'undefined') return null

  const utmTerm = localStorage.getItem(utm_term)
  if (utmTerm) {
    const utmTermParsed = JSON.parse(utmTerm)
    if (typeof utmTermParsed === 'string') return utmTermParsed
  }
  return null
}
