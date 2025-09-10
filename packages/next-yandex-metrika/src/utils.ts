'use client'
import 'client-only'

import {
  CreateYandexMetrikaProps,
  YMAddFileExtensionProps,
  YMExtLinkProps,
  YMFileProps,
  YMFirstPartyParamsProps,
  YMHitProps,
  YMInitProps,
  YMParamsProps,
  YMProps,
  YMReachGoalProps,
  YMSetUserIDProps,
  YMUserParamsProps,
} from './model'

export const ym = (...props: YMProps) => {
  if (
    typeof window === 'undefined' ||
    !('ym' in window) ||
    typeof window.ym !== 'function'
  ) {
    return true
  }

  try {
    window.ym(...props)
  } catch (error) {
    console.error(error)
  }

  return true
}

export const ymInit = ({
  yaCounterId,
  params,
}: CreateYandexMetrikaProps & {
  params: YMInitProps['2']
}) => {
  ym(yaCounterId, 'init', params)

  return true
}

export const ymGetClientId = ({ yaCounterId }: CreateYandexMetrikaProps) => {
  let _clientId = ''

  ym(yaCounterId, 'getClientID', clientId => {
    _clientId = clientId
  })

  return _clientId
}

export const ymSetUserId = ({
  yaCounterId,
  ymUserId,
}: CreateYandexMetrikaProps & {
  ymUserId: YMSetUserIDProps['2']
}) => {
  ym(yaCounterId, 'setUserID', ymUserId)

  return ymUserId
}

export const ymHit = ({
  yaCounterId,
  url,
  params,
}: CreateYandexMetrikaProps & {
  url: YMHitProps['2']
  params: YMHitProps['3']
}) => {
  ym(yaCounterId, 'hit', url, params)

  return url
}

export const ymNotBounce = ({ yaCounterId }: CreateYandexMetrikaProps) => {
  ym(yaCounterId, 'notBounce')

  return true
}

export const ymReachGoal = ({
  yaCounterId,
  goal,
  params,
  callback,
  ctx,
}: CreateYandexMetrikaProps & {
  goal: YMReachGoalProps['2']
  params: YMReachGoalProps['3']
  callback?: YMReachGoalProps['4']
  ctx?: YMReachGoalProps['5']
}) => {
  ym(yaCounterId, 'reachGoal', goal, params, callback, ctx)

  return goal
}

export const ymParams = ({
  yaCounterId,
  params,
}: CreateYandexMetrikaProps & {
  params: YMParamsProps['2']
}) => {
  ym(yaCounterId, 'params', params)

  return true
}

export const ymUserParams = ({
  yaCounterId,
  params,
}: CreateYandexMetrikaProps & {
  params: YMUserParamsProps['2']
}) => {
  ym(yaCounterId, 'userParams', params)

  return true
}

export const ymFirstPartyParams = ({
  yaCounterId,
  params,
}: CreateYandexMetrikaProps & {
  params: YMFirstPartyParamsProps['2']
}) => {
  ym(yaCounterId, 'firstPartyParams', params)

  return true
}

export const ymFirstPartyParamsHashed = ({
  yaCounterId,
  params,
}: CreateYandexMetrikaProps & {
  params: YMFirstPartyParamsProps['2']
}) => {
  ym(yaCounterId, 'firstPartyParamsHashed', params)

  return true
}

export const ymAddFileExtension = ({
  yaCounterId,
  params,
}: CreateYandexMetrikaProps & {
  params: YMAddFileExtensionProps['2']
}) => {
  ym(yaCounterId, 'addFileExtension', params)

  return true
}

export const ymExtLink = ({
  yaCounterId,
  url,
  params,
}: CreateYandexMetrikaProps & {
  url: YMExtLinkProps['2']
  params: YMExtLinkProps['3']
}) => {
  ym(yaCounterId, 'extLink', url, params)

  return true
}

export const ymFile = ({
  yaCounterId,
  url,
  params,
}: CreateYandexMetrikaProps & {
  url: YMFileProps['2']
  params: YMFileProps['3']
}) => {
  ym(yaCounterId, 'file', url, params)

  return true
}
