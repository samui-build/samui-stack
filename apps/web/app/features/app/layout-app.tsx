import { Button } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router'
import { UiFooter } from '~/ui/ui-footer'
import { UiLayout } from '~/ui/ui-layout'

export default function LayoutApp() {
  return (
    <UiLayout
      basePath="/"
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
    />
  )
}
