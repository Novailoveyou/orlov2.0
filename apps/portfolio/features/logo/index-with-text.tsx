import 'server-only'

import { useTranslations, useLocale } from 'next-intl'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'
import { Text } from '@/shared/components/text'
import { Span } from '@/shared/components/span'
import { LogoImage } from './logo-image'
import styles from './logo.module.css'

export const LogoWithText = ({
  className,
  ...props
}: Omit<ComponentProps<typeof Span>, 'children'>) => {
  const t = useTranslations('features.logo')
  const locale = useLocale()

  return (
    <Span
      className={cn(
        'flex flex-wrap justify-center items-center gap-4',
        className,
      )}
      {...props}>
      <LogoImage />
      <Text
        className={cn(
          'bg-clip-text [-webkit-text-fill-color:transparent] font-cute font-normal text-[2rem] align-middle leading-[100%]',
          locale === 'ru' && 'text-[1.25rem]',
          styles.text,
        )}>
        {t('name')}
      </Text>
    </Span>
  )
}
