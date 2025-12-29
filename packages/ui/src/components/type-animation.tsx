'use client'
import 'client-only'
import { ComponentProps } from 'react'
import { TypeAnimation as BaseTypeAnimation } from 'react-type-animation'

type TypeAnimationProps = ComponentProps<typeof BaseTypeAnimation>

export const TypeAnimation = ({
  wrapper = undefined,
  speed = 1,
  repeat = Infinity,
  role = 'marquee',
  deletionSpeed = 1,
  preRenderFirstString = true,
  cursor = true,
  ...props
}: TypeAnimationProps) => {
  return (
    <BaseTypeAnimation
      wrapper={wrapper}
      speed={speed}
      repeat={repeat}
      role={role}
      deletionSpeed={deletionSpeed}
      preRenderFirstString={preRenderFirstString}
      cursor={cursor}
      {...props}
    />
  )
}
