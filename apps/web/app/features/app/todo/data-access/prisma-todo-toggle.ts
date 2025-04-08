import { prisma } from '~/lib/db.server'

export async function prismaTodoToggle(data: FormData) {
  const id = data.get('id')
  if (!id || typeof id !== 'string') {
    throw new Error('id is required')
  }
  const found = await prisma.todo.findUnique({ where: { id } })
  if (!found) {
    throw new Error('Todo not found')
  }

  return await prisma.todo.update({ where: { id }, data: { completed: !found.completed } })
}
