import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const codeVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated:
        'ui:relative ui:bg-muted ui:px-[0.3rem] ui:py-[0.2rem] ui:rounded ui:font-mono ui:font-semibold ui:text-sm',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
