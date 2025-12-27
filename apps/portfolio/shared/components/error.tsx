import { Error as BaseError } from '@repo/ui/components/error'
import { ComponentProps } from 'react'

export const Error = ({ ...props }: ComponentProps<typeof BaseError>) => (
  <BaseError {...props} />
)
