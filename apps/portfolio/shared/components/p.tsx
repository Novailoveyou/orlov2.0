import { P as PBase } from '@repo/ui/components/tags/p'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'

export const P = ({ className, ...props }: ComponentProps<typeof PBase>) => (
  <PBase
    className={cn(
      'font-poppins font-medium text-[1.375rem] leading-[120%] tracking-[0.006875rem]',
      className,
    )}
    {...props}
  />
)
