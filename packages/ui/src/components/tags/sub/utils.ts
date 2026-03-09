import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const subVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:text-xs ui:align-sub',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
