import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type insVariants } from './utils'
import { INS_TAG } from './constants'

type InsBaseProps = ComponentProps<typeof INS_TAG>

export type InsProps = AsChildProp &
  VariantProps<typeof insVariants> &
  InsBaseProps
