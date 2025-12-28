'use client'
import 'client-only'

import { ComponentProps } from 'react'
import { useTranslations } from 'next-intl'
import { Error as SharedError } from '@/shared/components/error'

export default function Error(props: ComponentProps<typeof SharedError>) {
  const t = useTranslations('app.home.error')

  return (
    <SharedError title={t('title')} buttonText={t('buttonText')} {...props} />
  )
}
