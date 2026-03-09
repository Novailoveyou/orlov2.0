import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const qVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:italic',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
