import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type mapVariants } from './utils'
import { MAP_TAG } from './constants'

export type MapProps = AsChildProp &
  VariantProps<typeof mapVariants> &
  ComponentProps<typeof MAP_TAG>
