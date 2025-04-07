import { Select } from '@mantine/core'
import { Theme, useTheme } from 'remix-themes'

export function useThemes() {
  const themes: { label: string; value: Theme }[] = [
    { label: 'Light', value: Theme.LIGHT },
    { label: 'Dark', value: Theme.DARK },
  ]
  const [theme, setTheme] = useTheme()

  return { setTheme, theme, themes }
}

export function AppThemeSelect() {
  const { theme, setTheme, themes } = useThemes()

  return (
    <Select
      allowDeselect={false}
      onChange={(value) => setTheme(value as Theme)}
      value={theme?.toString()}
      data={themes.map(({ label, value }) => ({ label, value }))}
    />
  )
}
