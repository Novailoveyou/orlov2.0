import { ComponentProps } from 'react'
import { Div } from './tags/div'
import { cn } from '../utils'

type PagePropsBase = ComponentProps<typeof Div>

type PageProps = Pick<PagePropsBase, 'className' | 'children'> &
  Required<Pick<PagePropsBase, 'id'>>

/**
 * @description Page component to display page content
 */
export function Page({ id, className, children }: PageProps) {
  return (
    <Div id={id} className={cn(className)}>
      {children}
    </Div>
  )
}
