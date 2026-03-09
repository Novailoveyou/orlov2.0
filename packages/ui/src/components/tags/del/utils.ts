import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const delVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:line-through',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
