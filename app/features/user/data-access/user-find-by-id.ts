import { db, type User } from '~/lib/db.server'
import { logger } from '~/lib/helpers/logger'

export async function userFindById(id: string): Promise<User> {
  try {
    const found = await db.user.findUnique({ where: { id } })
    if (!found) {
      throw new Error('User not found')
    }
    return found
  } catch (error: unknown) {
    logger.error({ event: 'user_find_by_id_failed', error: (error as Error).message })
    throw new Error('Failed to find user')
  }
}
