import Script from 'next/script'
import { ComponentProps } from 'react'

export type CreateYandexMetrikaProps = {
  yaCounterId: number
}

export type YandexMetrikaProps = Pick<CreateYandexMetrikaProps, 'yaCounterId'> &
  Pick<ComponentProps<typeof Script>, 'onLoad' | 'onReady' | 'onError'> &
  YMInitProps['2'] & {
    visitParams?: VisitParams
    fileExtensionParams?: Extension[]
    isAutoHit?: boolean
  }

export type VisitParams = {
  order_price: number
  currency: 'USD' | 'RUB' | 'EUR'
}

export type Extension =
  | '3GP'
  | '7Z'
  | 'AAC'
  | 'AVI'
  | 'APK'
  | 'CSV'
  | 'DJVU'
  | 'DOCX'
  | 'EXE'
  | 'FLAC'
  | 'FLV'
  | 'GZ'
  | 'KEY'
  | 'MIDI'
  | 'MKA'
  | 'MKV'
  | 'MP3'
  | 'MP4'
  | 'MPEG'
  | 'MOV'
  | 'MSI'
  | 'OGG'
  | 'PDF'
  | 'PKG'
  | 'PPS'
  | 'PPT'
  | 'PPTX'
  | 'RAR'
  | 'RTF'
  | 'TXT'
  | 'WAV'
  | 'WMA'
  | 'WMV'
  | 'WMF'
  | 'XLSX'
  | 'ZIP'

export type YMInitProps = [
  CreateYandexMetrikaProps['yaCounterId'],
  'init',
  {
    accurateTrackBounce?: boolean | number
    childIframe?: boolean
    clickmap?: boolean
    defer?: boolean
    ecommerce?: boolean | string | unknown[]
    params?: Record<string, unknown>
    userParams?: Record<string, unknown>
    trackHash?: boolean
    trackLinks?: boolean
    trustedDomains?: string[]
    type?: number
    webvisor?: boolean
    triggerEvent?: boolean
    sendTitle?: boolean
  },
]

export type YMGetClientIDProps = [
  CreateYandexMetrikaProps['yaCounterId'],
  'getClientID',
  (clientId: string) => void,
]

export type YMSetUserIDProps = [
  CreateYandexMetrikaProps['yaCounterId'],
  'setUserID',
  string,
]

export type YMHitProps = [
  CreateYandexMetrikaProps['yaCounterId'],
  'hit',
  string,
  {
    ctx?: unknown
    callback?: (...props: unknown[]) => void
    params: VisitParams
    referer: string
    title: string
  },
]

export type YMNotBounceProps = [
  CreateYandexMetrikaProps['yaCounterId'],
  'notBounce',
]

export type YMReachGoalProps = [
  CreateYandexMetrikaProps['yaCounterId'],
  'reachGoal',
  string,
  params: VisitParams,
  callback?: (...props: unknown[]) => void,
  ctx?: unknown,
]

export type YMParamsProps = [
  CreateYandexMetrikaProps['yaCounterId'],
  'params',
  params: Record<string, unknown>,
]

export type YMUserParamsProps = [
  CreateYandexMetrikaProps['yaCounterId'],
  'userParams',
  params: { UserID: number } & Record<string, unknown>,
]

export type YMFirstPartyParamsProps = [
  CreateYandexMetrikaProps['yaCounterId'],
  'firstPartyParams' | 'firstPartyParamsHashed',
  params: {
    email: string
    phone_number: string
    first_name: string
    last_name: string
    yandex_cid?: number | string
  },
]

export type YMAddFileExtensionProps = [
  CreateYandexMetrikaProps['yaCounterId'],
  'addFileExtension',
  Extension | Extension[],
]

export type YMExtLinkProps = [
  CreateYandexMetrikaProps['yaCounterId'],
  'extLink',
  string,
  {
    ctx?: unknown
    callback?: (...props: unknown[]) => void
    params: VisitParams
    title: string
  },
]

export type YMFileProps = [
  CreateYandexMetrikaProps['yaCounterId'],
  'file',
  string,
  {
    ctx?: unknown
    callback?: (...props: unknown[]) => void
    params: VisitParams
    referer: string
    title: string
  },
]

export type YMProps =
  | YMInitProps
  | YMGetClientIDProps
  | YMSetUserIDProps
  | YMHitProps
  | YMNotBounceProps
  | YMReachGoalProps
  | YMParamsProps
  | YMUserParamsProps
  | YMFirstPartyParamsProps
  | YMAddFileExtensionProps
  | YMExtLinkProps
  | YMFileProps
