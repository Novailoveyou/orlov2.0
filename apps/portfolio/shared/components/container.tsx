import { Container as ContainerBase } from '@repo/ui/components/container'
import { ComponentProps } from 'react'
import { cn } from '@repo/ui/utils/index'

export function Container({
  className,
  ...props
}: ComponentProps<typeof ContainerBase>) {
  return (
    <ContainerBase
      className={cn(
        'bg-card shadow-[0_4px_35px_0_rgba(0,0,0,0.25)] px-[4.06rem] py-[2rem] rounded-[4.0625rem] max-w-[63.75rem]',
        className,
      )}
      {...props}
    />
  )
}
