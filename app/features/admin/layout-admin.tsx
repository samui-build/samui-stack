import { LucideLayoutDashboard, LucideSettings, LucideUsers } from 'lucide-react'
import React from 'react'
import { redirect } from 'react-router'
import { getUser } from '~/features/auth/data-access/get-user'
import { logger } from '~/lib/helpers/logger'
import { UiFooter } from '~/ui/ui-footer'
import type { UiHeaderLink } from '~/ui/ui-header'
import { UiLayout } from '~/ui/ui-layout'
import { UiProfileMenu } from '~/ui/ui-profile-menu'
import type { Route } from './+types/layout-admin'

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getUser(request)

  if (!user) {
    logger.info({ event: 'auth_layout_app_redirect', message: 'User not found' })
    return redirect('/login')
  }
  if (!user.admin) {
    logger.info({ event: 'auth_layout_app_redirect', message: 'User not admin' })
    return redirect('/dashboard')
  }

  return { user }
}

export default function LayoutAdmin({ loaderData: { user } }: Route.ComponentProps) {
  const links: UiHeaderLink[] = [
    { label: 'App Dashboard', to: '/dashboard' },
    { label: 'Todo', to: '/todo' },
  ]
  if (user.admin) {
    links.push({ label: 'Admin', to: '/admin' })
  }
  return (
    <UiLayout
      basePath="/admin"
      headerLinks={links}
      headerProfile={<UiProfileMenu user={user} />}
      footer={<UiFooter />}
      sidebarLinks={[
        { label: 'Dashboard', to: '/admin', icon: LucideLayoutDashboard },
        { label: 'Users', to: '/admin/users', icon: LucideUsers },
        {
          label: 'Settings',
          icon: LucideSettings,
          links: [
            { label: 'General', to: '/admin/settings/general' },
            { label: 'Security', to: '/admin/settings/security' },
          ],
        },
      ]}
    />
  )
}
