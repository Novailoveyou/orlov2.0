import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const summaryVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:cursor-pointer ui:font-semibold',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
