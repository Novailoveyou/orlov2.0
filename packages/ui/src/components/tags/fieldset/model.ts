import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type fieldsetVariants } from './utils'
import { FIELDSET_TAG } from './constants'

export type FieldsetProps = AsChildProp &
  VariantProps<typeof fieldsetVariants> &
  ComponentProps<typeof FIELDSET_TAG>
