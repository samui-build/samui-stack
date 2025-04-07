import { Button, Container, Group, Stack, Text } from '@mantine/core'
import { data, useFetcher } from 'react-router'
import { prismaTodoDelete } from '~/features/todo/data-access/prisma-todo-delete'
import { prismaTodoToggle } from '~/features/todo/data-access/prisma-todo-toggle'
import { formData } from '~/lib/form-data'
import type { Route } from './+types/todo-list'
import { prismaTodoCreate } from './data-access/prisma-todo-create'
import { prismaTodoFindAll } from './data-access/prisma-todo-find-all'
import { TodoUiList } from './ui/todo-ui-list'

export function meta() {
  return [{ title: 'Browse todos | Todo Hub POC' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export async function loader() {
  return { items: await prismaTodoFindAll() }
}

export async function action({ request }: Route.ActionArgs) {
  const body = await request.formData()
  const action = body.get('action')
  if (action === 'create') {
    const created = await prismaTodoCreate(body)

    return data({ created })
  }
  if (action === 'delete') {
    const deleted = await prismaTodoDelete(body)

    return data({ deleted })
  }
  if (action === 'toggle') {
    const toggled = await prismaTodoToggle(body)

    return data({ toggled })
  }
  throw new Error('Invalid action')
}

export default function TodoList({ loaderData }: Route.ComponentProps) {
  const { items } = loaderData
  const fetcher = useFetcher()

  async function deleteTodo(id: string) {
    await fetcher.submit(formData({ action: 'delete', id }), { method: 'post' })
  }

  async function toggleTodo(id: string) {
    await fetcher.submit(formData({ action: 'toggle', id }), { method: 'post' })
  }

  async function createTodo() {
    const title = prompt('Todo name', `Todo ${Date.now()}`)
    if (!title) {
      return
    }
    await fetcher.submit(formData({ action: 'create', title }), { method: 'post' })
  }

  return (
    <Container size="mx" py="xl">
      <Stack gap="xl">
        <Group justify="space-between">
          <Text fw="bold" size="xl">
            TODOs
          </Text>
          <Button type="button" onClick={createTodo}>
            New todo
          </Button>
        </Group>
        {items?.length ? (
          <TodoUiList items={items} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        ) : (
          <Text>You have no todos yet. Create one to get started.</Text>
        )}
      </Stack>
    </Container>
  )
}
