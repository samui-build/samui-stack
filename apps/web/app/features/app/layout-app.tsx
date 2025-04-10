import React from 'react'
import { redirect } from 'react-router'
import { getUser } from '~/features/auth/data-access/get-user'
import { logger } from '~/lib/logger'
import { UiFooter } from '~/ui/ui-footer'
import type { UiHeaderLink } from '~/ui/ui-header'
import { UiLayout } from '~/ui/ui-layout'
import { UiProfileMenu } from '~/ui/ui-profile-menu'
import type { Route } from './+types/layout-app'

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getUser(request)

  if (!user) {
    logger.info({ event: 'auth_layout_app_redirect', message: 'User not found' })
    return redirect('/login')
  }

  return { user }
}

export default function LayoutApp({ loaderData: { user } }: Route.ComponentProps) {
  const links: UiHeaderLink[] = [
    { label: 'App Dashboard', to: '/dashboard' },
    { label: 'Todo', to: '/todo' },
  ]
  if (user.admin) {
    links.push({ label: 'Admin', to: '/admin' })
  }
  return (
    <UiLayout basePath="/" headerLinks={links} headerProfile={<UiProfileMenu user={user} />} footer={<UiFooter />} />
  )
}
