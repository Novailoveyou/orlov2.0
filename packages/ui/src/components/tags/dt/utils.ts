import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const dtVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-semibold',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
