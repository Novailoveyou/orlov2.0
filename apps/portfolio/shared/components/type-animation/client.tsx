'use client'
import 'client-only'
import { ComponentProps } from 'react'
import { TypeAnimation as BaseTypeAnimation } from '@repo/ui/components/type-animation'

type TypeAnimationProps = Required<
  Pick<ComponentProps<typeof BaseTypeAnimation>, 'aria-label' | 'role'>
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
