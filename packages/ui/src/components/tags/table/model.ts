import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type tableVariants } from './utils'
import { TABLE_TAG } from './constants'

export type TableProps = AsChildProp &
  VariantProps<typeof tableVariants> &
  ComponentProps<typeof TABLE_TAG>
