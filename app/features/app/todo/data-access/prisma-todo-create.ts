import { prisma } from '~/lib/db.server'
import { logger } from '~/lib/helpers/logger'

export async function prismaTodoCreate(data: FormData) {
  const title = data.get('title')
  if (!title || typeof title !== 'string') {
    throw new Error('title is required')
  }

  try {
    return await prisma.todo.create({ data: { title } })
  } catch (error: unknown) {
    logger.error({ event: 'prisma_todo_create_failed', error: (error as Error).message })
    throw new Error('Failed to create todo')
  }
}
