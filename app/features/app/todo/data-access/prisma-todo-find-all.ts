import { prisma } from '~/lib/db.server'
import { logger } from '~/lib/helpers/logger'

export async function prismaTodoFindAll() {
  try {
    return await prisma.todo.findMany({ orderBy: [{ completed: 'asc' }, { createdAt: 'desc' }] })
  } catch (error: unknown) {
    logger.error({ event: 'prisma_todo_find_all_failed', error: (error as Error).message })
    throw new Error('Failed to find todos')
  }
}
