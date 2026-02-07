import type setupIndexedDB from 'use-indexeddb'

export const createIndexedDB = <
  IndexedDB extends Parameters<typeof setupIndexedDB>[0],
>(
  slice: IndexedDB,
) => slice
