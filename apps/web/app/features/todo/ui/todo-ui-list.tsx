import { Stack } from '@mantine/core'
import type { Todo } from '@prisma/client'
import { TodoUiListItem } from './todo-ui-list-item'

export function TodoUiList({
  items,
  deleteTodo,
  toggleTodo,
}: {
  items: Todo[]
  deleteTodo: (id: string) => Promise<void>
  toggleTodo: (id: string) => Promise<void>
}) {
  return (
    <Stack>
      {items.map((item) => (
        <TodoUiListItem item={item} deleteTodo={deleteTodo} key={item.id} toggleTodo={toggleTodo} />
      ))}
    </Stack>
  )
}
