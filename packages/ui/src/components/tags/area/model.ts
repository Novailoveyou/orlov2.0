import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type areaVariants } from './utils'
import { AREA_TAG } from './constants'

export type AreaProps = AsChildProp &
  VariantProps<typeof areaVariants> &
  ComponentProps<typeof AREA_TAG>
