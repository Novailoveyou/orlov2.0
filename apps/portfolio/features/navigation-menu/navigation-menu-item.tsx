import 'server-only'
import { ComponentProps, Suspense } from 'react'
import { Text } from '@/shared/components/text'
import { Icon } from '@/shared/components/icon'
import { Link } from '@/shared/components/link'
import { NavigationLink } from './navigation-link'

export const NavigationMenuItem = ({
  href,
  children,
  className,
  Icon: IconProp,
  'aria-label': ariaLabel,
  ...props
}: ComponentProps<typeof Link> &
  Pick<ComponentProps<typeof Icon>, 'Icon' | 'aria-label'>) => {
  // figure out a way to get rid of suspense here
  return (
    <Suspense>
      <NavigationLink href={href} className={className} {...props}>
        <Icon Icon={IconProp} width='w-5' height='h-5' aria-label={ariaLabel} />
        <Text className='font-normal text-xs uppercase leading-[100%]'>
          {children}
        </Text>
      </NavigationLink>
    </Suspense>
  )
}
