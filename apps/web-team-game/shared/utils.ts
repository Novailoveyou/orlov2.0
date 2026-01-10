import { cn as cnBase } from '@repo/ui/utils/index'
import { objectKeys as objectKeysBase } from '@repo/ui/utils/index'
import { isRussianLocale as isRussianLocaleBase } from '@repo/ui/components/lang-toggle-dropdown/utils'

export const cn: typeof cnBase = (...props) => cnBase(...props)

export const objectKeys: typeof objectKeysBase = (...props) =>
  objectKeysBase(...props)

export const isRussianLocale: typeof isRussianLocaleBase = (...props) =>
  isRussianLocaleBase(...props)
