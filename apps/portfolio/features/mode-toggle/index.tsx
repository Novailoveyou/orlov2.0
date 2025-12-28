import 'server-only'

import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'
import { ModeToggle as ModeToggleBase } from '@/shared/components/mode-toggle'

export const ModeToggle = ({
  className,
}: Pick<ComponentProps<typeof ModeToggleBase>, 'className'>) => {
  const t = useTranslations('features.mode-toggle')

  return <ModeToggleBase className={className} aria-label={t('themeToggle')} />
}
