import { Button as BaseButton } from '@repo/ui/components/shadcnui/button'
import { ComponentProps } from 'react'

export const Button = (props: ComponentProps<typeof BaseButton>) => {
  return <BaseButton {...props} />
}
