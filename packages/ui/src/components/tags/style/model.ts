import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type styleVariants } from './utils'
import { STYLE_TAG } from './constants'

type StyleBaseProps = ComponentProps<typeof STYLE_TAG>

export type StyleProps = AsChildProp &
  VariantProps<typeof styleVariants> &
  StyleBaseProps
