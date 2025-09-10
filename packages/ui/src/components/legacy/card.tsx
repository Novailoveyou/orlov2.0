import { type ReactNode } from 'react'

export function Card({
  title,
  children,
  href,
}: {
  title: string
  children: ReactNode
  href: string
}) {
  return (
    <a
      className='ui:group hover:ui:bg-neutral-800/30 ui:px-5 ui:py-4 ui:border hover:ui:border-neutral-700 ui:border-transparent ui:rounded-lg ui:transition-colors'
      href={`${href}?utm_source=create-turbo&utm_medium=with-tailwind&utm_campaign=create-turbo"`}
      rel='noopener noreferrer'
      target='_blank'>
      <h2 className='ui:mb-3 ui:font-semibold ui:text-2xl'>
        {title}{' '}
        <span className='ui:inline-block motion-reduce:ui:transform-none ui:transition-transform group-hover:ui:translate-x-1'>
          -&gt;
        </span>
      </h2>
      <p className='ui:opacity-50 ui:m-0 ui:max-w-[30ch] ui:text-sm'>
        {children}
      </p>
    </a>
  )
}
