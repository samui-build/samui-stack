import { Button, Group, Paper, Text } from '@mantine/core'
import type { Todo } from '@prisma/client'

export function TodoUiListItem({
  item,
  deleteTodo,
  toggleTodo,
}: {
  item: Todo
  deleteTodo: (id: string) => Promise<void>
  toggleTodo: (id: string) => Promise<void>
}) {
  return (
    <Paper withBorder p="md">
      <Group justify="space-between" align="center">
        <Text
          size="md"
          style={{
            textDecoration: item.completed ? 'line-through' : 'none',
          }}
        >
          {item.title}
        </Text>
        <Group gap="xs" justify="flex-end">
          <Button type="button" onClick={() => toggleTodo(item.id)}>
            Toggle
          </Button>
          <Button
            type="button"
            onClick={() => {
              if (!confirm('Are you sure you want to delete this todo?')) {
                return
              }
              return deleteTodo(item.id)
            }}
          >
            Delete
          </Button>
        </Group>
      </Group>
    </Paper>
  )
}
