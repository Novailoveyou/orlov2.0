import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type timeVariants } from './utils'
import { TIME_TAG } from './constants'

type BaseTimeProps = ComponentProps<typeof TIME_TAG>

export type TimeProps = AsChildProp &
  VariantProps<typeof timeVariants> &
  Omit<BaseTimeProps, 'dateTime'> &
  Required<Pick<BaseTimeProps, 'dateTime'>>
