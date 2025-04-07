import { createTheme, type MantineColorScheme, MantineProvider } from '@mantine/core'
import { DEFAULT_THEME } from '@mantine/core'
import type { ReactNode } from 'react'

const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: DEFAULT_THEME.colors.blue,
  },
})

export function AppThemeProvider({ children, colorScheme }: { children: ReactNode; colorScheme: 'light' | 'dark' }) {
  return (
    <MantineProvider forceColorScheme={colorScheme} theme={theme}>
      {children}
    </MantineProvider>
  )
}
