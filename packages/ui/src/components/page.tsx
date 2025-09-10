import { ComponentProps } from 'react'

type PageProps = ComponentProps<'div'>

/**
 * @description Page component to display page content
 */
export function Page({ children, ...props }: PageProps) {
  return <div {...props}>{children}</div>
}
