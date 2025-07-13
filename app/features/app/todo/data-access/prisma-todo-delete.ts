import { prisma } from '~/lib/db.server'
import { logger } from '~/lib/helpers/logger'

export async function prismaTodoDelete(data: FormData) {
  const id = data.get('id')
  if (!id || typeof id !== 'string') {
    throw new Error('id is required')
  }
  const found = await prisma.todo.findUnique({ where: { id } })
  if (!found) {
    throw new Error('Todo not found')
  }
  try {
    return await prisma.todo.delete({ where: { id } })
  } catch (error: unknown) {
    logger.error({ event: 'prisma_todo_delete_failed', error: (error as Error).message })
    throw new Error('Failed to delete todo')
  }
}
