import { Anchor, Container, Group, Text } from '@mantine/core'
import React from 'react'
import { Link, Outlet } from 'react-router'

export default function AppLayoutAuth() {
  return (
    <Container size="lg" py="md">
      <Group justify="space-between">
        <Anchor component={Link} to="/about">
          Home
        </Anchor>
        <Anchor component={Link} to="/dashboard">
          Dashboard
        </Anchor>
      </Group>
      <Text>Layout Auth</Text>
      <Outlet />
    </Container>
  )
}
