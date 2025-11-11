import useSWR from 'swr'
import { toCapitalCase } from './utils'
import { createClientFetcher } from './client'

type UseFetcherReturnType<Data, Entity extends string> = Record<
  Entity,
  Data | undefined
> &
  Record<`is${Capitalize<Entity>}Loading`, boolean> &
  Record<`is${Capitalize<Entity>}Validating`, boolean> &
  Record<`${Entity}Error`, unknown> &
  Record<`${Entity}Mutate`, unknown>

const renameSWRData = <Data, Entity extends string>(
  swrData: ReturnType<typeof useSWR<Data>>,
  entity: Entity,
): UseFetcherReturnType<Data, Entity> => {
  /** @ts-expect-error @TODO fox this */
  return {
    [entity]: swrData.data,
    [`is${toCapitalCase(entity)}Loading`]: swrData.isLoading,
    [`is${toCapitalCase(entity)}Validating`]: swrData.isValidating,
    [`${entity}Error`]: swrData.error,
    [`${entity}Mutate`]: swrData.mutate,
  } as const
}

export const useFetcher = <Data, Entity extends string>(
  key: Parameters<typeof useSWR<Data>>[0],
  fetcher: Parameters<typeof useSWR<Data>>[1],
  {
    entity,
    ...options
  }: Parameters<typeof useSWR<Data>>[2] & { entity: Entity },
) => {
  const data = useSWR(key, fetcher, options)

  return renameSWRData(data, entity)
}

const Test = () => {
  const { products } = useFetcher(
    '/test',
    createClientFetcher().clientFetcher.get<number[]>,
    { entity: 'products', fallbackData: [] },
  )

  const { data } = useSWR(
    '/test',
    createClientFetcher().clientFetcher.get<number[]>,
    { fallbackData: [] },
  )
}
