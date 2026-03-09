import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const h6Variants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-semibold ui:text-lg ui:tracking-tight',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
