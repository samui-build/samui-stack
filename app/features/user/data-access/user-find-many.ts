import { db, type User } from '~/lib/db.server'
import { logger } from '~/lib/helpers/logger'

export async function userFindMany(): Promise<User[]> {
  try {
    return db.user.findMany({ orderBy: { updatedAt: 'desc' } })
  } catch (error) {
    logger.error({ event: 'user_find_many_failed', error: (error as Error).message })
    throw new Error('Failed to find users')
  }
}
