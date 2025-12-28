import 'server-only'

import { useTranslations, useLocale } from 'next-intl'
import { Image } from '@/shared/components/image'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'
import { Link } from '@/shared/components/link'
import { LINKS } from '@/shared/constants'
import { Text } from '@/shared/components/text'
import logo from './logo.svg'
import styles from './logo.module.css'

export const Logo = ({
  className,
}: Pick<ComponentProps<typeof Image>, 'className'>) => {
  const t = useTranslations('features.logo')
  const locale = useLocale()

  return (
    <Link
      href={LINKS.root}
      pending={t('loading')}
      className={cn(
        'flex flex-wrap justify-center items-center gap-4',
        className,
      )}>
      <Image src={logo} desiredWidth={38} alt={t('name')} priority />
      <Text
        className={cn(
          'bg-clip-text [-webkit-text-fill-color:transparent] font-cute font-normal text-[2rem] align-middle leading-[100%]',
          locale === 'ru' && 'text-[1.25rem]',
          styles.text,
        )}>
        {t('name')}
      </Text>
    </Link>
  )
}
