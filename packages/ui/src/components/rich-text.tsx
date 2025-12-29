import { ComponentProps, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { Underline } from './underline'
import { cn } from '../utils/index'
import { Span } from './tags/span'

type Tag = 'underline'

type RichTextProps = Omit<ComponentProps<typeof Span>, 'children'> & {
  children: (tags: Record<Tag, (chunks: ReactNode) => ReactNode>) => ReactNode
  asChild?: boolean
}

export const RichText = ({
  className,
  children: Children,
  asChild = false,
  ...props
}: RichTextProps) => {
  const Comp = asChild ? Slot : Span

  return (
    // 'prose'
    <Comp className={cn(className)} {...props}>
      <Children underline={chunk => <Underline>{chunk}</Underline>} />
    </Comp>
  )
}
