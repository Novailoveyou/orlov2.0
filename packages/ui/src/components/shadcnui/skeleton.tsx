import { cn } from '../../utils/index'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='skeleton'
      className={cn('ui:bg-accent ui:rounded-md ui:animate-pulse', className)}
      {...props}
    />
  )
}

export { Skeleton }
