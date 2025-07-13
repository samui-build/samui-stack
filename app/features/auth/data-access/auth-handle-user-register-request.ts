import { redirect } from 'react-router'
import { authUserRegister } from '~/features/auth/data-access/auth-user-register'
import { commitSession, getSession } from '~/lib/sessions.server'
import { logger } from '~/lib/helpers/logger'

export async function authHandleUserRegisterRequest(request: Request) {
  try {
    const formData = await request.formData()
    const user = await authUserRegister({
      username: formData.get('username')?.toString(),
      password: formData.get('password')?.toString(),
    })
    if (!user) {
      logger.error({ event: 'auth_register_action', message: 'user not registered' })
      throw new Error('Invalid register data')
    }
    const session = await getSession(request.headers.get('Cookie'))
    session.set('user', user)

    return redirect('/', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    })
  } catch (error: unknown) {
    logger.error({ event: 'auth_register_failed', error: (error as Error).message })
    throw error
  }
}
