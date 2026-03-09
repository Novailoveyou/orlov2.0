import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type optgroupVariants } from './utils'
import { OPTGROUP_TAG } from './constants'

export type OptgroupProps = AsChildProp &
  VariantProps<typeof optgroupVariants> &
  ComponentProps<typeof OPTGROUP_TAG>
