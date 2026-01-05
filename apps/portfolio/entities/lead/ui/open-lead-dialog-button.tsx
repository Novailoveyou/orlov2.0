'use client'
import 'client-only'
import { ComponentProps, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { PrimaryButton } from '@/shared/components/primary-button'
import { Link } from '@/shared/components/link'
import { useRouter } from '@/app/_/i18n/navigation'

export const OpenLeadDialogButton = ({
  children,
  className,
}: Pick<ComponentProps<typeof PrimaryButton>, 'className' | 'children'>) => {
  const router = useRouter()
  const t = useTranslations('entities.lead')

  useEffect(() => {
    router.prefetch('/lead')
  }, [router])

  return (
    <PrimaryButton className={className} asChild>
      <Link href='/lead'>{children || t('hireMe')}</Link>
    </PrimaryButton>
  )
}
