import { Authenticator } from 'remix-auth'
import { FormStrategy } from 'remix-auth-form'
import { authUserLogin } from '~/features/auth/data-access/auth-user-login'
import type { User } from '~/lib/db.server'
import { logger } from '~/lib/helpers/logger'

export const authenticator = new Authenticator<User>()

authenticator.use(
  new FormStrategy(async ({ form }) => {
    try {
      return await authUserLogin({
        username: form.get('username')?.toString(),
        password: form.get('password')?.toString(),
      })
    } catch (error: unknown) {
      logger.error({ event: 'authenticator_login_failed', error: (error as Error).message })
      throw error
    }
  }),
  'user-pass',
)
