import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const h5Variants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-semibold ui:text-xl ui:tracking-tight',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
