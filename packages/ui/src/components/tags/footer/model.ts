import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type footerVariants } from './utils'
import { FOOTER_TAG } from './constants'

type FooterBaseProps = ComponentProps<typeof FOOTER_TAG>

export type FooterProps = AsChildProp &
  VariantProps<typeof footerVariants> &
  FooterBaseProps
