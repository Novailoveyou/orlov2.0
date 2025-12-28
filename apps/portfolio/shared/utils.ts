import { cn as cnBase } from '@repo/ui/utils/index'
import { objectKeys as objectKeysBase } from '@repo/ui/utils/index'

export const cn: typeof cnBase = (...props) => cnBase(...props)

export const objectKeys: typeof objectKeysBase = (...props) =>
  objectKeysBase(...props)
