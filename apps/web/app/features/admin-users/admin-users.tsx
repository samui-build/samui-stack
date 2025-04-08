import { Anchor, Group, Paper, Stack, Text } from '@mantine/core'
import { Link } from 'react-router'
import { appMeta } from '~/lib/app-meta'
import { AppThemeSelect } from '~/ui/app-theme-select'

export function meta() {
  return appMeta()
}

export default function Dashboard() {
  return (
    <Stack p="xl" gap="xl">
      <Paper withBorder p="md">
        <Group justify="space-between">
          <Text>Hello World</Text>
          <AppThemeSelect />
        </Group>
      </Paper>
      <Paper withBorder p="md">
        <Anchor component={Link} to="/todo">
          Todo List
        </Anchor>
      </Paper>
    </Stack>
  )
}
