import { cn } from '../utils'
import { ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { Div } from '../tags/div'

export const containerVariants = cva('', {
  variants: {
    variant: {
      default: 'relative z-20 w-full px-5 max-w-[90rem] mx-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type ContainerProps = Pick<
  ComponentProps<typeof Div>,
  'className' | 'children'
> &
  VariantProps<typeof containerVariants>

/**
 * @description Container component to wrap content and center it
 */
export function Container({ className, children, variant }: ContainerProps) {
  return (
    <Div className={cn(containerVariants({ variant, className }))}>
      {children}
    </Div>
  )
}
