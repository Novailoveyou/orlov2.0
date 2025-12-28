import { ComponentProps, ReactNode } from 'react'
import { Underline } from './underline'
import { cn } from '../utils/index'
import { Span } from './tags/span'

type Tag = 'underline'

type RichTextProps = Omit<ComponentProps<typeof Span>, 'children'> & {
  children: (tags: Record<Tag, (chunks: ReactNode) => ReactNode>) => ReactNode
}

export const RichText = ({
  className,
  children: Children,
  ...props
}: RichTextProps) => {
  return (
    // 'prose'
    <Span className={cn(className)} {...props}>
      <Children underline={chunk => <Underline>{chunk}</Underline>} />
    </Span>
  )
}
