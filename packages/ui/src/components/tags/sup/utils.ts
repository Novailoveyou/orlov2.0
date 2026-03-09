import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const supVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:text-xs ui:align-super',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
