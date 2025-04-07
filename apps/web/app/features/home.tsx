import { Anchor, Group, Paper, Stack, Text } from '@mantine/core'
import { Link } from 'react-router'
import { AppThemeSelect } from '~/ui/app-theme-select'
import type { Route } from './+types/home'

export function meta() {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home(props: Route.ComponentProps) {
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
