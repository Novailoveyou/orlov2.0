import { ComponentProps } from 'react'

type MainProps = ComponentProps<'main'>

/**
 * @description Main component to display main content
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
 */
export function Main({ children, role = 'main', ...props }: MainProps) {
  return (
    <main role={role} {...props}>
      {children}
    </main>
  )
}
