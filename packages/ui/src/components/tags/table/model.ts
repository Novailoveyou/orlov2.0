import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type tableVariants } from './utils'
import { TABLE_TAG } from './constants'

type TableBaseProps = ComponentProps<typeof TABLE_TAG>

export type TableProps = AsChildProp &
  VariantProps<typeof tableVariants> &
  TableBaseProps
