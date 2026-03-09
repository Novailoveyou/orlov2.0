import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type rubyVariants } from './utils'
import { RUBY_TAG } from './constants'

type RubyBaseProps = ComponentProps<typeof RUBY_TAG>

export type RubyProps = AsChildProp &
  VariantProps<typeof rubyVariants> &
  RubyBaseProps
