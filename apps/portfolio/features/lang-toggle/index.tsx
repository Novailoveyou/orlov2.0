'use client'
import 'client-only'

import { usePathname, useRouter } from '@/app/_/i18n/navigation'
import { useParams } from 'next/navigation'
import { Locale } from '@/shared/types'

// TODO: figure out loading state for lang toggle && figure out a way to switch locale without going back to home page
export const LangToggle = () => {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()

  // const changeLocaleWithoutParams = (locale: Locale) =>
  //   router.replace(pathname, { locale })

  const changeLocaleWithParams = (locale: Locale) => {
    // With `pathnames`: Pass `params` as well
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale },
    )
  }

  return (
    <>
      <button onClick={() => changeLocaleWithParams('ru')}>ru</button>
      <button onClick={() => changeLocaleWithParams('en')}>en</button>
    </>
  )
}
