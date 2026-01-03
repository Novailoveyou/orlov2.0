import { ComponentProps } from 'react'
import { useTranslations } from 'next-intl'
import { PrimaryButton } from '@/shared/components/primary-button'
import { Link } from '@/shared/components/link'

export const OpenLeadDialogButton = ({
  children,
  className,
}: Pick<ComponentProps<typeof PrimaryButton>, 'className' | 'children'>) => {
  const t = useTranslations('entities.lead')

  return (
    <PrimaryButton className={className} asChild>
      <Link href='/lead'>{children || t('hireMe')}</Link>
    </PrimaryButton>
  )
}
