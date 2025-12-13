import { H1 } from '@/shared/components/h1'
import { Text } from '@/shared/components/text'

export function MyName() {
  return (
    <H1 className='flex flex-col uppercase'>
      <Text>Hello!</Text>
      <Text>my name is</Text>
      <Text>Ilia Orlov</Text>
    </H1>
  )
}
