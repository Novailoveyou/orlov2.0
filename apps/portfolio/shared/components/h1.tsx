import { H1 as H1Base } from '@repo/ui/components/tags/h1'
import { cn } from '@/shared/utils'
import { ComponentProps } from 'react'

export const H1 = ({ className, ...props }: ComponentProps<typeof H1Base>) => {
  return <H1Base className={cn(className)} {...props} />
}
