import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type templateVariants } from './utils'
import { TEMPLATE_TAG } from './constants'

type TemplateBaseProps = ComponentProps<typeof TEMPLATE_TAG>

export type TemplateProps = AsChildProp &
  VariantProps<typeof templateVariants> &
  TemplateBaseProps
