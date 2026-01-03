'use client'
import 'client-only'
import { Toaster as Sonner, ToasterProps, toast } from 'sonner'
import { cn } from '../../utils'

const Toaster = ({
  theme = 'system',
  richColors = true,
  expand = false,
  visibleToasts = 3,
  id,
  position = 'top-center',
  closeButton = true,
  offset = '2rem',
  mobileOffset = '1rem',
  swipeDirections,
  dir = 'auto',
  hotkey,
  invert = false,
  // TODO: apply custom toast options
  toastOptions,
  gap = 14,
  // TODO: apply custom icons
  icons,
  duration = 4000,
  containerAriaLabel,
  className,
  style,
  ...props
}: Omit<ToasterProps, 'theme'> & { theme: string }) => {
  return (
    <Sonner
      // TODO: figure out types better
      theme={theme as ToasterProps['theme']}
      richColors={richColors}
      expand={expand}
      visibleToasts={visibleToasts}
      id={id}
      position={position}
      closeButton={closeButton}
      offset={offset}
      mobileOffset={mobileOffset}
      swipeDirections={swipeDirections}
      dir={dir}
      hotkey={hotkey}
      invert={invert}
      toastOptions={toastOptions}
      gap={gap}
      icons={icons}
      duration={duration}
      containerAriaLabel={containerAriaLabel}
      className={cn('ui:group ui:toaster', className)}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster, toast }
