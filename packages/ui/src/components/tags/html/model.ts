import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type htmlVariants } from './utils'
import { HTML_TAG } from './constants'

type BaseHTMLProps = ComponentProps<typeof HTML_TAG>

export type HtmlProps = AsChildProp &
  VariantProps<typeof htmlVariants> &
  Required<Pick<BaseHTMLProps, 'lang'>> &
  Omit<BaseHTMLProps, 'lang'>
