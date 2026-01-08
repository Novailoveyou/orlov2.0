import { ComponentProps } from 'react'
import { PhoneInput as PhoneInputBase } from '@repo/ui/components/phone-input'

export const PhoneInput = ({
  ...props
}: ComponentProps<typeof PhoneInputBase>) => {
  return <PhoneInputBase {...props} />
}
