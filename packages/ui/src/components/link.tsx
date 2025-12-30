'use client'
import 'client-only'

import NextLink from 'next/link'
import { cn } from '../utils'
import { ComponentProps } from 'react'
import { Slot } from '@radix-ui/react-slot'

type ImageProps = Omit<
  ComponentProps<typeof NextLink>,
  'passHref' | 'legacyBehavior'
> & {
  asChild?: boolean
}

/**
 * @description Link component to display link component
 * @see https://nextjs.org/docs/api-reference/next/link
 */
export const Link = ({
  href,
  as,
  replace = false,
  scroll = true,
  shallow = false,
  prefetch = true,
  locale,
  onMouseEnter,
  onTouchStart,
  onClick,
  onNavigate,
  className,
  children,
  'aria-label': ariaLabel,
  asChild = false,
  ...props
}: ImageProps) => {
  const Comp = asChild ? Slot : NextLink

  // const [pending, setIsPending] = useState(false)

  return (
    <Comp
      data-slot='link'
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={locale ? false : prefetch}
      locale={locale}
      onMouseEnter={onMouseEnter}
      onTouchStart={onTouchStart}
      onClick={onClick}
      onNavigate={onNavigate}
      className={cn(
        'ui:cursor-pointer',
        // pending && 'ui:cursor-progress ui:opacity-50',
        className,
      )}
      aria-label={ariaLabel}
      // aria-disabled={pending ? 'true' : undefined}
      {...props}>
      {children}
      {/* <LinkChildren setIsPending={setIsPending}>{children}</LinkChildren> */}
    </Comp>
  )
}

// function LinkChildren({
//   children,
//   setIsPending,
// }: Pick<ImageProps, 'children'> & {
//   setIsPending: (value: boolean | ((prevState: boolean) => boolean)) => void
// }) {
//   const { pending } = useLinkStatus()

//   useEffect(() => {
//     setIsPending(pending)
//   }, [pending, setIsPending])

//   return <>{children}</>
// }
