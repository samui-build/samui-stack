import { createTheme, DEFAULT_THEME, MantineProvider, type MantineProviderProps } from '@mantine/core'

const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: DEFAULT_THEME.colors.blue,
  },
})

export function UiThemeProvider({
  children,
  colorScheme,
  ...props
}: Omit<MantineProviderProps, 'forceColorScheme'> & {
  colorScheme: 'light' | 'dark'
}) {
  return (
    <MantineProvider forceColorScheme={colorScheme} theme={theme} {...props}>
      {children}
    </MantineProvider>
  )
}
