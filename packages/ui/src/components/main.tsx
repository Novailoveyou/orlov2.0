import { ComponentProps } from 'react'

type MainProps = ComponentProps<'main'>

/**
 * @description Main component to display main content
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
 */
export function Main({ children, ...props }: MainProps) {
  return <main {...props}>{children}</main>
}
