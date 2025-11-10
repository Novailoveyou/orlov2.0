import useSWR from 'swr'
import { createFetcher } from '.'
import { toCapitalCase } from './utils'
import { createClientFetcher } from './client'
import type { createServerFetcher } from '@repo/api/server'

type UseSWRParameters<Data> = Parameters<typeof useSWR<Data>>

type ToCapitalCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : S

type UseFetcherReturnType<Data, Entity extends string> = Record<
  Entity,
  Data | undefined
> &
  Record<`is${ToCapitalCase<Entity>}Loading`, boolean> &
  Record<`is${ToCapitalCase<Entity>}Validating`, boolean> &
  Record<`${Entity}Error`, unknown> &
  Record<`${Entity}Mutate`, unknown>

type CreateUseFetchersProps = ReturnType<
  typeof createClientFetcher | typeof createServerFetcher
>

export const createUseFetchers = (
  props: CreateUseFetchersProps = createClientFetcher(),
) => {
  const fetcher =
    'clientFetcher' in props ? props.clientFetcher : props.serverFetcher

  const useGet = <Data, Entity extends string>(
    key: UseSWRParameters<Data>[0],
    { entity, ...options }: UseSWRParameters<Data>[2] & { entity: Entity },
  ): UseFetcherReturnType<Data, Entity> => {
    const { data, isLoading, isValidating, error, mutate } = useSWR(
      key,
      fetcher.get<Data>,
      options,
    )

    /** @ts-expect-error @TODO fox this */
    return {
      [entity]: data,
      [`is${toCapitalCase(entity)}Loading`]: isLoading,
      [`is${toCapitalCase(entity)}Validating`]: isValidating,
      [`${entity}Error`]: error,
      [`${entity}Mutate`]: mutate,
    } as const
  }

  return { useGet }
}

const { useGet } = createUseFetchers()

const Test = () => {
  const {} = useGet<string, 'test1'>('/test', { entity: 'test1' })
}
