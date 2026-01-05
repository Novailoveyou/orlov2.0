import 'server-only'

import { Copyright as CopyrightBase } from '@repo/ui/components/copyright'
import { ComponentProps } from 'react'
import { APP_NAME } from '../constants'
import { cn } from '../utils'

export const Copyright = ({
  className,
  ...props
}: Omit<ComponentProps<typeof CopyrightBase>, 'name'>) => (
  <CopyrightBase
    name={APP_NAME}
    className={cn('text-xs', className)}
    {...props}
  />
)
