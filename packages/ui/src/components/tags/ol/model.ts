import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type olVariants } from './utils'
import { OL_TAG } from './constants'

type OlBaseProps = ComponentProps<typeof OL_TAG>

export type OlProps = AsChildProp &
  VariantProps<typeof olVariants> &
  OlBaseProps
