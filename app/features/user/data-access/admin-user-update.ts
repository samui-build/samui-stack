import { db, type User, type UserUpdateInput, UserUpdateInputSchema } from '~/lib/db.server'
import { logger } from '~/lib/helpers/logger'

export async function adminUserUpdate(id: string, input: UserUpdateInput): Promise<User> {
  const { error, data } = UserUpdateInputSchema.safeParse(input)
  if (error) {
    logger.error({ event: 'admin_user_update_invalid_data', error: error.message })
    throw new Error('Invalid user data')
  }
  try {
    return db.user.update({ where: { id }, data })
  } catch (error: unknown) {
    logger.error({ event: 'admin_user_update_failed', error: (error as Error).message })
    throw new Error('Failed to update user')
  }
}
