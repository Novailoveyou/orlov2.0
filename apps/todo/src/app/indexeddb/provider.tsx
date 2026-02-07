import { todoIndexedDB } from '@/entities/todo/store'
import { handleError } from '@/shared/utils'
import { useEffect, type ComponentProps } from 'react'
import setupIndexedDB from 'use-indexeddb'

const promises = [todoIndexedDB].map(indexedDB => setupIndexedDB(indexedDB))

export const IndexedDBProvider = ({
  children,
}: Pick<ComponentProps<'span'>, 'children'>) => {
  useEffect(() => {
    Promise.all(promises)
      .then(() => console.log('success'))
      .catch(handleError)
  }, [])

  return <>{children}</>
}
