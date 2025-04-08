import { Anchor, Container, Group, Text } from '@mantine/core'
import React from 'react'
import { Link, Outlet } from 'react-router'

export default function AppLayoutApp() {
  return (
    <Container size="lg" py="md">
      <Group justify="space-between">
        <Anchor component={Link} to="/about">
          Home
        </Anchor>
        <Anchor component={Link} to="/logout">
          Logout
        </Anchor>
      </Group>
      <Text>Layout App</Text>
      <Outlet />
    </Container>
  )
}
