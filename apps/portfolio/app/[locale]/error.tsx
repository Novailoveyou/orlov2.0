'use client'
import 'client-only'

import { useTranslations } from 'next-intl'

// TODO: figure out error props { error, reset }
// { error, reset }
export default function Error() {
  const t = useTranslations('Test1')

  return (
    <div>
      <h1>{t('title')}</h1>
      {/* <button onClick={reset}>{t('retry')}</button> */}
    </div>
  )
}
