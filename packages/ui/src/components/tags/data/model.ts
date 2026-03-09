import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type dataVariants } from './utils'
import { DATA_TAG } from './constants'

type DataBaseProps = ComponentProps<typeof DATA_TAG>

export type DataProps = AsChildProp &
  VariantProps<typeof dataVariants> &
  DataBaseProps
