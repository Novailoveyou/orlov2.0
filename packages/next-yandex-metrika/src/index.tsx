'use client'
import 'client-only'

import { VisitParams } from './model'
import {
  ymGetClientId,
  ymSetUserId,
  ymHit,
  ymInit,
  ymNotBounce,
  ymParams,
  ymReachGoal,
  ymUserParams,
  ymFirstPartyParams,
  ymAddFileExtension,
  ymExtLink,
  ymFile,
  ymFirstPartyParamsHashed,
} from './utils'
import { YandexMetrikaProps } from './model'
import { ComponentProps, useEffect } from 'react'
import Script from 'next/script'

export const VISIT_PARAMS = {
  currency: 'RUB',
  order_price: 0,
} as const satisfies VisitParams

const YandexMetrikaHit = ({
  yaCounterId,
  visitParams = VISIT_PARAMS,
  isAutoHit,
}: Pick<
  ComponentProps<typeof YandexMetrika>,
  'yaCounterId' | 'visitParams' | 'isAutoHit'
>) => {
  useEffect(() => {
    if (isAutoHit)
      ymHit({
        yaCounterId,
        url: window.location.href,
        params: {
          title: document.title,
          referer: document.referrer,
          params: visitParams,
        },
      })
  })

  return <></>
}

const YandexMetrika = ({
  yaCounterId,
  onLoad,
  onReady,
  onError,
  accurateTrackBounce = true,
  childIframe = false,
  clickmap = true,
  defer = true,
  ecommerce = 'dataLayer',
  params = {},
  userParams = {},
  trackHash = true,
  trackLinks = true,
  trustedDomains,
  type = 0,
  webvisor = process.env.NODE_ENV !== 'development',
  triggerEvent = process.env.NODE_ENV === 'development',
  sendTitle = true,
  visitParams = VISIT_PARAMS,
  fileExtensionParams = ['PDF', 'TXT', 'ZIP'],
  isAutoHit = true,
}: YandexMetrikaProps) => {
  const _onError: ComponentProps<typeof Script>['onLoad'] = (...props) => {
    onError?.(...props)
  }

  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'Yandex Metrika is not initialized in development mode. Use `triggerEvent` to manually trigger events.',
    )
    return null
  }

  return (
    <>
      <Script
        id={`yandex-metrika--${yaCounterId}`}
        onLoad={onLoad}
        onReady={onReady}
        onError={_onError}
        defer>
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.webvisor.org/metrika/tag_ww.js", "ym");ym(${yaCounterId}, "init", ${JSON.stringify(
          {
            accurateTrackBounce,
            childIframe,
            clickmap,
            defer,
            ecommerce,
            params,
            userParams,
            trackHash,
            trackLinks,
            trustedDomains,
            type,
            webvisor,
            triggerEvent,
            sendTitle,
          },
        )});ym(${yaCounterId}, "addFileExtension", ${JSON.stringify(
          fileExtensionParams,
        )});`}
      </Script>
      <YandexMetrikaHit
        yaCounterId={yaCounterId}
        visitParams={visitParams}
        isAutoHit={isAutoHit}
      />
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${yaCounterId}`}
            style={{
              position: 'absolute',
              left: '-9999px',
            }}
            alt=''
          />
        </div>
      </noscript>
    </>
  )
}

/**
 * @description Yandex Metrika Factory Function
 * @see https://yandex.com/support/metrica/en/code/counter-initialize
 */
export const createYandexMetrika = <
  Goal extends Parameters<typeof ymReachGoal>['0']['goal'],
>({
  yaCounterId,
  visitParams,
  ...props
}: ComponentProps<typeof YandexMetrika>) => {
  return {
    YandexMetrika: ({
      yaCounterId: ymYaCounterId,
      ...ymProps
    }: Partial<ComponentProps<typeof YandexMetrika>>) => (
      <YandexMetrika
        yaCounterId={ymYaCounterId || yaCounterId}
        {...props}
        {...ymProps}
      />
    ),
    /**
     * @see https://yandex.com/support/metrica/en/objects/method-reference
     */
    ym: {
      init: (params: Parameters<typeof ymInit>['0']['params']) =>
        ymInit({ yaCounterId, params }),
      getClientId: () => ymGetClientId({ yaCounterId }),
      setUserId: (ymUserId: Parameters<typeof ymSetUserId>['0']['ymUserId']) =>
        ymSetUserId({ yaCounterId, ymUserId }),
      hit: (
        url: Parameters<typeof ymHit>['0']['url'],
        params: Parameters<typeof ymHit>['0']['params'] = {
          params: visitParams || VISIT_PARAMS,
          title: document.title,
          referer: document.referrer,
        },
      ) => ymHit({ yaCounterId, url, params }),
      notBounce: () => ymNotBounce({ yaCounterId }),
      reachGoal: (
        goal: Goal,
        params: Parameters<typeof ymReachGoal>['0']['params'] = visitParams ||
          VISIT_PARAMS,
      ) => ymReachGoal({ yaCounterId, goal, params }),
      params: (params: Parameters<typeof ymParams>['0']['params']) =>
        ymParams({ yaCounterId, params }),
      userParams: (params: Parameters<typeof ymUserParams>['0']['params']) =>
        ymUserParams({ yaCounterId, params }),
      firstPartyParams: (
        params: Parameters<typeof ymFirstPartyParams>['0']['params'],
      ) => ymFirstPartyParams({ yaCounterId, params }),
      firstPartyParamsHashed: (
        params: Parameters<typeof ymFirstPartyParamsHashed>['0']['params'],
      ) => ymFirstPartyParamsHashed({ yaCounterId, params }),
      addFileExtension: (
        params: Parameters<typeof ymAddFileExtension>['0']['params'],
      ) => ymAddFileExtension({ yaCounterId, params }),
      extLink: (
        url: Parameters<typeof ymExtLink>['0']['url'],
        params: Parameters<typeof ymExtLink>['0']['params'] = {
          title: document.title,
          params: visitParams || VISIT_PARAMS,
        },
      ) => ymExtLink({ yaCounterId, url, params }),
      file: (
        url: Parameters<typeof ymFile>['0']['url'],
        params: Parameters<typeof ymFile>['0']['params'] = {
          title: document.title,
          referer: document.referrer,
          params: visitParams || VISIT_PARAMS,
        },
      ) => ymFile({ yaCounterId, url, params }),
    },
  }
}
