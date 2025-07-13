import { Flex } from '@mantine/core'
import { data, Form, redirect } from 'react-router'
import { appMeta } from '~/lib/helpers/app-meta'
import { logger } from '~/lib/helpers/logger'
import type { Route } from './+types/route-login'
import { authHandleUserLoginRequest } from './data-access/auth-handle-user-login.request'
import { getUser } from './data-access/get-user'
import { AuthUiForm } from './ui/auth-ui-form'

export function meta() {
  return appMeta('Login')
}

export async function action({ request }: Route.ActionArgs) {
  return await authHandleUserLoginRequest(request)
}

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getUser(request)
  if (user) {
    logger.info({ event: 'auth_login_redirect', userId: user.id, message: 'User already logged in' })
    return redirect('/dashboard')
  }
  return data(null)
}

export default function RouteLogin() {
  return (
    <Flex direction="column" justify="center" align="center" h="100%">
      <Form method="post">
        <AuthUiForm
          buttonLabel="Log In"
          ctaLabel="Register here."
          ctaTo="/register"
          description="Don't have an account?"
          title="Sign in to your account"
        />
      </Form>
    </Flex>
  )
}
