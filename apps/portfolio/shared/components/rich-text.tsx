import { ComponentProps } from 'react'
import { RichText as BaseRichText } from '@repo/ui/components/rich-text'

export const RichText = (props: ComponentProps<typeof BaseRichText>) => {
  return <BaseRichText {...props} />
}
