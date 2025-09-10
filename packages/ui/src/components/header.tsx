import { ComponentProps } from 'react'

type HeaderProps = ComponentProps<'header'>

/**
 * @description Header component to display header content
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
 */
export function Header({ children, ...props }: HeaderProps) {
  return <header {...props}>{children}</header>
}
