import useSWR from 'swr'
import { createClientFetcher } from '../client'
import { useFetcher } from './useFetcher'
import { useMutation } from './useMutation'

const Test = () => {
  const { products } = useFetcher(
    '/test',
    createClientFetcher().clientFetcher.get<number[]>,
    { entity: 'products', fallbackData: [] },
  )

  const { product, triggerProduct } = useMutation(
    '/test',
    createClientFetcher().clientMutation.mutationPost<
      number[],
      { test: string }
    >,
    {
      entity: 'product',
    },
  )

  const { data } = useSWR(
    '/test',
    createClientFetcher().clientFetcher.get<number[]>,
    { fallbackData: [] },
  )
}
