import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type sourceVariants } from './utils'
import { SOURCE_TAG } from './constants'

type SourceBaseProps = ComponentProps<typeof SOURCE_TAG>

export type SourceProps = AsChildProp &
  VariantProps<typeof sourceVariants> &
  SourceBaseProps
