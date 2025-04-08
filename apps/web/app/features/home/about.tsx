import { Group, Paper, Stack, Text } from '@mantine/core'
import { appMeta } from '~/lib/app-meta'
import type { Route } from './+types/about'

export function meta() {
  return appMeta('About', 'About page')
}

export default function Index(props: Route.ComponentProps) {
  return (
    <Stack p="xl" gap="xl">
      <Paper withBorder p="md">
        <Group justify="space-between">
          <Text>About</Text>
        </Group>
      </Paper>
    </Stack>
  )
}
