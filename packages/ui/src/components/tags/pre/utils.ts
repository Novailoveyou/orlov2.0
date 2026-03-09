import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const preVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-mono ui:whitespace-pre ui:overflow-auto',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
