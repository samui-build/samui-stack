import { db, type User } from '~/lib/db.server'
import { userFindById } from './user-find-by-id'
import { logger } from '~/lib/helpers/logger'

export async function adminUserDelete(id: string): Promise<User> {
  const found = await userFindById(id)
  try {
    return db.user.delete({ where: { id: found.id } })
  } catch (error: unknown) {
    logger.error({ event: 'admin_user_delete_failed', error: (error as Error).message })
    throw new Error('Failed to delete user')
  }
}
