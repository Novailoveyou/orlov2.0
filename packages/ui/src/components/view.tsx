import { ComponentProps } from 'react'
import { Div } from './tags/div'
import { cn } from '../utils'

type ViewPropsBase = ComponentProps<typeof Div>

type ViewProps = Pick<ViewPropsBase, 'className' | 'children'> &
  Required<Pick<ViewPropsBase, 'id'>>

/**
 * @description View component to display view content
 */
export function View({ id, className, children }: ViewProps) {
  return (
    <Div id={id} className={cn(className)}>
      {children}
    </Div>
  )
}
