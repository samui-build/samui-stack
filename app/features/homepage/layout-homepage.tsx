import { Button } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router'
import { UiFooter } from '~/ui/ui-footer'
import { UiLayout } from '~/ui/ui-layout'

export default function LayoutHomepage() {
  return (
    <UiLayout
      basePath="/admin"
      headerLinks={[{ label: 'About', to: '/about' }]}
      headerProfile={
        <Button component={Link} to="/login" variant="light" size="xs">
          Login
        </Button>
      }
      footer={<UiFooter />}
    />
  )
}
