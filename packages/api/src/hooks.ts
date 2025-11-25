import useSWR from 'swr'
import { toCapitalCase } from './utils'
import { createClientFetcher } from './client'

type SWRParams<Data, Error> = Parameters<typeof useSWR<Data, Error>>

type HelpingVerb<Data> = Data extends unknown[] ? 'are' : 'is'

const makeHelpingVerb = <Data>(data: Data) =>
  Array.isArray(data) ? 'are' : 'is'

const renameSWRData = <Data, Error, Entity extends string>(
  {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
  }: ReturnType<typeof useSWR<Data, Error>>,
  entity: Entity,
) =>
  ({
    [entity]: data,
    [`${makeHelpingVerb(data)}${toCapitalCase(entity)}Loading`]: isLoading,
    [`${makeHelpingVerb(data)}${toCapitalCase(entity)}Validating`]:
      isValidating,
    [`${entity}Error`]: error,
    [`${entity}Mutate`]: mutate,
  }) as const as Record<Entity, typeof data> &
    Record<
      `${HelpingVerb<typeof data>}${Capitalize<Entity>}Loading`,
      typeof isLoading
    > &
    Record<
      `${HelpingVerb<typeof data>}${Capitalize<Entity>}Validating`,
      typeof isValidating
    > &
    Record<`${Entity}Error`, typeof error> &
    Record<`${Entity}Mutate`, typeof mutate>

// TODO: type properly with fallbackData etc
export const useFetcher = <Data, Error, Entity extends string>(
  key: SWRParams<Data, Error>[0],
  fetcher: SWRParams<Data, Error>[1],
  {
    entity,
    ...options
  }: SWRParams<Data, Error>[2] & {
    entity: Entity
  },
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
