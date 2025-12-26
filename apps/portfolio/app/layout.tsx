// Since we have a root `not-found.tsx` page, a layout file

import { ComponentProps, JSX } from 'react'

// is required, even if it's just passing children through.
export default function RootLayout({
  children,
}: Pick<ComponentProps<keyof JSX.IntrinsicElements>, 'children'>) {
  return children
}
