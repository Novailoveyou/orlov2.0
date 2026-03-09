import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const h1Variants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated:
        'ui:font-extrabold ui:text-4xl ui:text-balance ui:tracking-tight ui:scroll-m-20',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
