import { redirect } from 'react-router'
import { authenticator } from '~/lib/authenticator.server'
import { logger } from '~/lib/helpers/logger'
import { commitSession, getSession } from '~/lib/sessions.server'

export async function authHandleUserLoginRequest(request: Request) {
  try {
    const user = await authenticator.authenticate('user-pass', request)
    if (!user) {
      logger.info({ event: 'auth_login_error', message: 'User not found' })
      throw new Error('Invalid login data')
    }
    const session = await getSession(request.headers.get('Cookie'))
    session.set('user', user)

    logger.info({ event: 'auth_login_success', userId: user.id })
    return redirect('/dashboard', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    })
  } catch (error: unknown) {
    logger.error({ event: 'auth_login_failed', error: (error as Error).message })
    throw error
  }
}
