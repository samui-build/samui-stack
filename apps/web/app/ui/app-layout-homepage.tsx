import { Anchor, Container, Group, Text } from '@mantine/core'
import React from 'react'
import { Link, Outlet } from 'react-router'

export default function AppLayoutHomepage() {
  return (
    <Container size="lg" py="md">
      <Group justify="space-between">
        <Anchor component={Link} to="/">
          Home
        </Anchor>
        <Anchor component={Link} to="/login">
          Login
        </Anchor>
      </Group>
      <Text>Layout Homepage</Text>
      <Outlet />
    </Container>
  )
}
