import { Anchor, Group, Paper, Stack, Text } from '@mantine/core'
import { Link } from 'react-router'
import { appMeta } from '~/lib/helpers/app-meta'

export function meta() {
  return appMeta('Home')
}

export default function RouteIndex() {
  return (
    <Stack p="xl" gap="xl">
      <Paper withBorder p="md">
        <Group justify="space-between">
          <Text>Hello World</Text>
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
