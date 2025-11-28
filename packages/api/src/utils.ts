import { capitalCase } from 'change-case'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

export const toCapitalCase = <Str extends string>(str: Str) =>
  capitalCase(str) as Capitalize<Str>

export const renameSWRData = <Data, Entity extends string>(
  {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
  }: ReturnType<typeof useSWR<Data>>,
  entity: Entity,
) => {
  const capitalizedEntity = toCapitalCase(entity)

  return {
    [entity]: data,
    [`is${capitalizedEntity}Loading`]: isLoading,
    [`is${capitalizedEntity}Validating`]: isValidating,
    [`${entity}Error`]: error,
    [`${entity}Mutate`]: mutate,
  } as const as Record<Entity, typeof data> &
    Record<`is${Capitalize<Entity>}Loading`, boolean> &
    Record<`is${Capitalize<Entity>}Validating`, boolean> &
    Record<`${Entity}Error`, unknown> &
    Record<`${Entity}Mutate`, unknown>
}

export const renameSWRMutationData = <Data, Entity extends string>(
  { data, error, isMutating, trigger }: ReturnType<typeof useSWRMutation<Data>>,
  entity: Entity,
) => {
  const capitalizedEntity = toCapitalCase(entity)

  return {
    [entity]: data,
    [`is${capitalizedEntity}Mutating`]: isMutating,
    [`${entity}Error`]: error,
    [`${entity}Trigger`]: trigger,
  } as const as Record<Entity, Data> &
    Record<`is${Capitalize<Entity>}Mutating`, boolean> &
    Record<`${Entity}Error`, unknown> &
    Record<`${Entity}Trigger`, typeof trigger>
}

// const test = <T, Key extends PropertyKey>(
//   key: Key,
// ): { [_Key in Key]: { [__Key in _Key]: true } }[Key] => ({ [key]: true }) as any

// function kv<T, K extends PropertyKey, V>(
//   k: K,
//   v: V,
// ): { [P in K]: { [Q in P]: V } }[K] {
//   return { [k]: v } as any
// }

// const hello = kv('a', 1)

// const hello1 = test('products')
