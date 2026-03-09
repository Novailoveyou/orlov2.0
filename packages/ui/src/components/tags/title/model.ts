import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type titleVariants } from './utils'
import { TITLE_TAG } from './constants'

export type TitleProps = AsChildProp &
  VariantProps<typeof titleVariants> &
  ComponentProps<typeof TITLE_TAG>
