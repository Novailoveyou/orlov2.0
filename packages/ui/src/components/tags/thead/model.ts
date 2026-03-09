import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type theadVariants } from './utils'
import { THEAD_TAG } from './constants'

type TheadBaseProps = ComponentProps<typeof THEAD_TAG>

export type TheadProps = AsChildProp &
  VariantProps<typeof theadVariants> &
  TheadBaseProps
