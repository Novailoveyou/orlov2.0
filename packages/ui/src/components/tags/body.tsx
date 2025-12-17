import { cn } from '../../utils'
import { ComponentProps } from 'react'

type BodyProps = ComponentProps<'body'>

/**
 * @description Body component to display body
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
 */
export function Body({ children, className, ...props }: BodyProps) {
  return (
    <body
      className={cn(
        'ui:min-h-dvh ui:transition-[color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,transform,translate,scale,rotate] ui:antialiased',
        className,
      )}
      {...props}>
      {children}
    </body>
  )
}
