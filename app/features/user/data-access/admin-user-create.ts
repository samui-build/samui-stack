import { userFindByUsername } from '~/features/user/data-access/user-find-by-username'
import { prisma, type User, type UserCreateInput, UserCreateInputSchema } from '~/lib/db.server'
import { logger } from '~/lib/helpers/logger'

export async function adminUserCreate(input: UserCreateInput): Promise<User> {
  const { error, data } = UserCreateInputSchema.safeParse(input)
  if (error) {
    logger.error({ event: 'admin_user_create_invalid_data', error: error.message })
    throw new Error('Invalid user data')
  }
  const found = await userFindByUsername(data.username, false)
  if (found) {
    throw new Error('User already exists')
  }
  try {
    const created = await prisma.user.create({ data })
    logger.info({ event: 'admin_user_create_success', userId: created.id, username: created.username })
    return created
  } catch (error: unknown) {
    logger.error({ event: 'admin_user_create_failed', error: (error as Error).message })
    throw new Error('Failed to create user')
  }
}
