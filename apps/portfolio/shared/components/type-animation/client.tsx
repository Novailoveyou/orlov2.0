'use client'
import 'client-only'
import { ComponentProps } from 'react'
import { TypeAnimation as BaseTypeAnimation } from '@repo/ui/components/type-animation'

type TypeAnimationProps = Pick<
  ComponentProps<typeof BaseTypeAnimation>,
  'role' | 'aria-hidden' | 'aria-label'
> & {
  items: string[]
}

export const TypeAnimation = ({ items, ...props }: TypeAnimationProps) => {
  return (
    <BaseTypeAnimation
      sequence={items.reduce(
        (acc, cur) => [...acc, cur, 3000],
        [] as ComponentProps<typeof BaseTypeAnimation>['sequence'],
      )}
      {...props}
    />
  )
}
