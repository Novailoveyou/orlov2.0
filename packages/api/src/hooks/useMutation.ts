import useSWRMutation, {
  MutationFetcher,
  SWRMutationConfiguration,
  SWRMutationResponse,
} from 'swr/mutation'
import { makeHelpingVerb, toCapitalCase } from '../utils'
import { HelpingVerb } from '../types'

const renameUseMutationOutput = <
  Data,
  Error,
  Entity extends string,
  Key extends string | null,
  ExtraArg,
>(
  {
    data,
    isMutating,
    error,
    reset,
    trigger,
  }: SWRMutationResponse<Data, Error, Key, ExtraArg>,
  entity: Entity,
) => {
  const capitalizedEntity = toCapitalCase(entity)

  return {
    [entity]: data,
    [`${makeHelpingVerb(data)}${capitalizedEntity}Mutating`]: isMutating,
    [`${entity}Error`]: error,
    [`reset${capitalizedEntity}`]: reset,
    [`trigger${capitalizedEntity}`]: trigger,
  } as const as Record<Entity, typeof data> &
    Record<
      `${HelpingVerb<Data>}${Capitalize<Entity>}Mutating`,
      typeof isMutating
    > &
    Record<`${Entity}Error`, typeof error> &
    Record<`reset${Capitalize<Entity>}`, typeof reset> &
    Record<`trigger${Capitalize<Entity>}`, typeof trigger>
}

export const useMutation = <
  Data,
  Error,
  Entity extends string,
  Key extends string | null,
  ExtraArg,
>(
  key: Key,
  fetcher: MutationFetcher<Data, Key, ExtraArg>,
  {
    entity,
    ...options
  }: SWRMutationConfiguration<Data, Error, Key, ExtraArg> & {
    entity: Entity
  },
) => {
  const data = useSWRMutation(key, fetcher, options)

  return renameUseMutationOutput(data, entity)
}
