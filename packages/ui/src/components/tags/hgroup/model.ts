import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type hgroupVariants } from './utils'
import { HGROUP_TAG } from './constants'

type HgroupBaseProps = ComponentProps<typeof HGROUP_TAG>

export type HgroupProps = AsChildProp &
  VariantProps<typeof hgroupVariants> &
  HgroupBaseProps
