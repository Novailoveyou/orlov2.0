import 'server-only'

import { ThemeProvider as ThemeProviderBase } from '@repo/ui/components/theme-provider'
import { ComponentProps } from 'react'

export const ThemeProvider = ({
  attribute = 'class',
  defaultTheme = 'system',
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}: ComponentProps<typeof ThemeProviderBase>) => (
  <ThemeProviderBase
    attribute={attribute}
    defaultTheme={defaultTheme}
    enableSystem={enableSystem}
    disableTransitionOnChange={disableTransitionOnChange}
    {...props}
  />
)
