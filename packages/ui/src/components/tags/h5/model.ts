import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type h5Variants } from './utils'
import { H5_TAG } from './constants'

type H5BaseProps = ComponentProps<typeof H5_TAG>

export type H5Props = AsChildProp &
  VariantProps<typeof h5Variants> &
  H5BaseProps
