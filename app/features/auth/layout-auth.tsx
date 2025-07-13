import { Button } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router'
import { UiFooter } from '~/ui/ui-footer'
import { UiLayout } from '~/ui/ui-layout'

export default function LayoutAuth() {
  return (
    <UiLayout
      basePath="/"
      headerLinks={[]}
      headerProfile={
        <Button component={Link} to="/dashboard" variant="light" size="xs">
          Dashboard
        </Button>
      }
      footer={<UiFooter />}
    />
  )
}
