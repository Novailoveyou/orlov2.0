import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const h2Variants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated:
        'first:ui:mt-0 ui:pb-2 ui:border-b ui:font-semibold ui:text-3xl ui:tracking-tight ui:scroll-m-20',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
