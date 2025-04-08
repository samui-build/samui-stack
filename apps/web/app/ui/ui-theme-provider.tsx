import { createTheme, DEFAULT_THEME, MantineProvider } from '@mantine/core'
import type { ReactNode } from 'react'

const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: DEFAULT_THEME.colors.blue,
  },
})

export function UiThemeProvider({ children, colorScheme }: { children: ReactNode; colorScheme: 'light' | 'dark' }) {
  return (
    <MantineProvider forceColorScheme={colorScheme} theme={theme}>
      {children}
    </MantineProvider>
  )
}
