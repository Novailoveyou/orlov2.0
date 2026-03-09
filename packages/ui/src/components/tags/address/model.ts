import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type addressVariants } from './utils'
import { ADDRESS_TAG } from './constants'

export type AddressProps = AsChildProp &
  VariantProps<typeof addressVariants> &
  ComponentProps<typeof ADDRESS_TAG>
