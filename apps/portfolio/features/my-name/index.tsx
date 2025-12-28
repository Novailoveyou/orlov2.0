import 'server-only'

import { useTranslations } from 'next-intl'
import { H1 } from '@/shared/components/h1'
import { Text } from '@/shared/components/text'

export function MyName() {
  const t = useTranslations('features.my-name')

  return (
    <H1 className='flex flex-col mb-8'>
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
