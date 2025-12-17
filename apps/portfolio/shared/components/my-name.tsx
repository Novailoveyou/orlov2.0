import 'server-only'

import { H1 } from '@/shared/components/h1'
import { Text } from '@/shared/components/text'

export const i18n = {
  hello: 'Hello!',
  myNameIs: 'my name is',
  iliaOrlov: 'Ilia Orlov',
}

export function MyName() {
  return (
    <H1 className='flex flex-col mb-8'>
      <Text className='font-bold text-[5.125rem] uppercase leading-[100%]'>
        {i18n.hello}
      </Text>
      <Text className='font-normal text-[2.9375rem] leading-[100%] tracking-[0.0235rem]'>
        {i18n.myNameIs}
      </Text>
      <Text className='mt-[0.75rem] font-bold text-[3.1875rem] uppercase leading-[100%] tracking-[0.03506rem]'>
        {i18n.iliaOrlov}
      </Text>
    </H1>
  )
}
