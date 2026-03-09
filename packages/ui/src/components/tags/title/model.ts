import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type titleVariants } from './utils'
import { TITLE_TAG } from './constants'

type TitleBaseProps = ComponentProps<typeof TITLE_TAG>

export type TitleProps = AsChildProp &
  VariantProps<typeof titleVariants> &
  TitleBaseProps
