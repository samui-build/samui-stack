import { Flex } from '@mantine/core'
import { data, Form, redirect } from 'react-router'
import { appMeta } from '~/lib/helpers/app-meta'
import { logger } from '~/lib/helpers/logger'
import type { Route } from './+types/route-register'
import { authHandleUserRegisterRequest } from './data-access/auth-handle-user-register-request'
import { getUser } from './data-access/get-user'
import { AuthUiForm } from './ui/auth-ui-form'

export function meta() {
  return appMeta('Register')
}

export async function action({ request }: Route.ActionArgs) {
  return await authHandleUserRegisterRequest(request)
}

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getUser(request)
  if (user) {
    logger.info({ event: 'auth_register_redirect', userId: user.id, message: 'User already logged in' })
    return redirect('/dashboard')
  }
  return data(null)
}

export default function RouteRegister() {
  return (
    <Flex direction="column" justify="center" align="center" h="100%">
      <Form method="post">
        <AuthUiForm
          buttonLabel="Register"
          ctaLabel="Log in here."
          ctaTo="/login"
          description="Already have an account?"
          title="Register for an account"
        />
      </Form>
    </Flex>
  )
}
