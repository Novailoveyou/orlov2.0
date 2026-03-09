import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type liVariants } from './utils'
import { LI_TAG } from './constants'

type LiBaseProps = ComponentProps<typeof LI_TAG>

export type LiProps = AsChildProp &
  VariantProps<typeof liVariants> &
  LiBaseProps
