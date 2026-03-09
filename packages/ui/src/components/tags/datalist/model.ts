import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type datalistVariants } from './utils'
import { DATALIST_TAG } from './constants'

type DatalistBaseProps = ComponentProps<typeof DATALIST_TAG>

export type DatalistProps = AsChildProp &
  VariantProps<typeof datalistVariants> &
  DatalistBaseProps
