import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const dfnVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:italic ui:font-semibold',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
