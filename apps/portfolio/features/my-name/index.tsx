import 'server-only'

import { ComponentProps } from 'react'
import { useTranslations } from 'next-intl'
import { H1 } from '@/shared/components/h1'
import { Text } from '@/shared/components/text'
import { cn } from '@/shared/utils'

export function MyName({
  className,
}: Pick<ComponentProps<typeof H1>, 'className'>) {
  const t = useTranslations('features.my-name')

  return (
    <H1 className={cn('flex flex-col', className)}>
      <Text className='font-bold text-[5.125rem] uppercase leading-[100%]'>
        {t('hello')}
      </Text>
      <Text className='font-normal text-[2.9375rem] leading-[100%] tracking-[0.0235rem]'>
        {t('myNameIs')}
      </Text>
      <Text className='mt-[0.75rem] font-bold text-[3.1875rem] uppercase leading-[100%] tracking-[0.03506rem]'>
        {t('iliaOrlov')}
      </Text>
    </H1>
  )
}
