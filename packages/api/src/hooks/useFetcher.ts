import useSWR, { Fetcher, SWRConfiguration, SWRResponse } from 'swr'
import { makeHelpingVerb, toCapitalCase } from '../utils'
import { HelpingVerb } from '../types'

const renameUseFetcherOutput = <Data, Error, Entity extends string>(
  { data, error, isLoading, isValidating, mutate }: SWRResponse<Data, Error>,
  entity: Entity,
) => {
  const helpingVerb = makeHelpingVerb(data)
  const capitalizedEntity = toCapitalCase(entity)

  return {
    [entity]: data,
    [`${helpingVerb}${capitalizedEntity}Loading`]: isLoading,
    [`${helpingVerb}${capitalizedEntity}Validating`]: isValidating,
    [`${entity}Error`]: error,
    [`${entity}Mutate`]: mutate,
  } as const as Record<Entity, typeof data> &
    Record<
      `${HelpingVerb<Data>}${Capitalize<Entity>}Loading`,
      typeof isLoading
    > &
    Record<
      `${HelpingVerb<Data>}${Capitalize<Entity>}Validating`,
      typeof isValidating
    > &
    Record<`${Entity}Error`, typeof error> &
    Record<`${Entity}Mutate`, typeof mutate>
}

// TODO: type properly with fallbackData etc
export const useFetcher = <
  Data,
  Error,
  Entity extends string,
  Key extends string | null,
>(
  key: Key,
  fetcher: Fetcher<Data, Key>,
  {
    entity,
    ...options
  }: SWRConfiguration<Data, Error> & {
    entity: Entity
  },
) => {
  const data = useSWR(key, fetcher, options)

  return renameUseFetcherOutput(data, entity)
}
