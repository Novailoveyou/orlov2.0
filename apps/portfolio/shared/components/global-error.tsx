import { GlobalError as BaseGlobalError } from '@repo/ui/components/global-error'
import { ComponentProps } from 'react'

export const GlobalError = ({
  ...props
}: ComponentProps<typeof BaseGlobalError>) => <BaseGlobalError {...props} />
