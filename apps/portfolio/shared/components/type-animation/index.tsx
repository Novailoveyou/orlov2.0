import 'server-only'
import { ComponentProps } from 'react'
import { Div } from '@/shared/components/div'
import { P } from '@/shared/components/p'
import { TypeAnimation as BaseTypeAnimation } from '@/shared/components/type-animation/client'
import { cn } from '@/shared/utils'

type TypeAnimationProps = Pick<ComponentProps<typeof Div>, 'className'> &
  Pick<
    ComponentProps<typeof BaseTypeAnimation>,
    'items' | 'role' | 'aria-label'
  >

export const TypeAnimation = ({ className, ...props }: TypeAnimationProps) => {
  return (
    <Div
      className={cn(
        'flex flex-row-reverse scrollbar-w-0 max-w-full scrollbar-h-0 overflow-x-auto whitespace-nowrap scrollbar',
        className,
      )}>
      <P className='mr-auto'>
        <BaseTypeAnimation {...props} />
      </P>
    </Div>
  )
}

// {
//   format.list(
//     descriptionKeys.map(descriptionKey => (
//       <RichText key={descriptionKey} asChild>
//         {tags => t.rich(descriptionKey, tags)}
//       </RichText>
//     )),
//     { type: 'conjunction' },
//   )
// }
