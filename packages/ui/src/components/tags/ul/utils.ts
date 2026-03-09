import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const ulVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:m-0 ui:p-0',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
