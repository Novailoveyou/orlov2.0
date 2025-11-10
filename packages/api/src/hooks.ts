import useSWR from 'swr'
import { createFetcher } from '.'

export type UseSWRParameters<Data> = Parameters<typeof useSWR<Data>>

type ToCapitalCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : S

export const createUseFetchers = (
  { fetcher, mutation, handleAPIError } = createFetcher(),
) => {
  const useGet = <Data, Entity extends string>(
    key: UseSWRParameters<Data>[0],
    entity: Entity,
    options?: UseSWRParameters<Data>[2],
  ): Record<Entity, Data | undefined> &
    Record<`is${ToCapitalCase<Entity>}Loading`, boolean> => {
    const { data, isLoading, isValidating, error, mutate } = useSWR(
      key,
      fetcher.get<Data>,
      options,
    )

    // return Object.assign({ [entity]: data })
    return {[entity]: data, []}
  }

  return { useGet }
}

const { useGet } = createUseFetchers()

const Test = () => {
  const {} = useGet('/test', 'test')
}
