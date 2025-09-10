import { ComponentProps } from 'react'

type FooterProps = ComponentProps<'footer'>

/**
 * @description Footer component to display footer content
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
 */
export function Footer({ children, ...props }: FooterProps) {
  return <footer {...props}>{children}</footer>
}
