import { db, type User } from '~/lib/db.server'
import { logger } from '~/lib/helpers/logger'

export async function userFindByUsername(username?: string, throwError = true): Promise<User | undefined> {
  try {
    const found = await db.user.findFirst({ where: { username } })
    if (!found && throwError) {
      throw new Error('User not found')
    }
    return found ?? undefined
  } catch (error: unknown) {
    logger.error({ event: 'user_find_by_username_failed', error: (error as Error).message })
    throw new Error('Failed to find user by username')
  }
}
