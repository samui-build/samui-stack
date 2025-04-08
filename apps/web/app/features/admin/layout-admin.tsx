import { Button } from '@mantine/core'
import { LucideLayoutDashboard, LucideSettings, LucideUsers } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { UiFooter } from '~/ui/ui-footer'
import { UiLayout } from '~/ui/ui-layout'

export default function LayoutAdmin() {
  return (
    <UiLayout
      basePath="/admin"
      headerLinks={[
        { label: 'App Dashboard', to: '/dashboard' },
        { label: 'Todo', to: '/todo' },
        { label: 'Admin Dashboard', to: '/admin' },
      ]}
      headerProfile={
        <Button component={Link} to="/logout" variant="light" size="xs">
          Logout
        </Button>
      }
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
