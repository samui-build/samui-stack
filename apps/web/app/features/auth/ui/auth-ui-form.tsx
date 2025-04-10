import { Anchor, Button, Paper, Stack, Text, TextInput } from '@mantine/core'
import { Link } from 'react-router'

export function AuthUiForm({
  buttonLabel,
  ctaLabel,
  ctaTo,
  description,
  title,
}: {
  buttonLabel: string
  ctaLabel: string
  ctaTo: string
  description: string
  title: string
}) {
  return (
    <Paper shadow="lg" p="md" withBorder miw={400}>
      <Stack>
        <Text>{title}</Text>
        <Text size="sm">
          {description}{' '}
          <Anchor component={Link} to={ctaTo}>
            {ctaLabel}
          </Anchor>
        </Text>
        <TextInput type="username" label="Username" name="username" autoComplete="username" required />
        <TextInput type="password" label="Password" name="password" autoComplete="current-password" required />
        <Button type="submit">{buttonLabel}</Button>
      </Stack>
    </Paper>
  )
}
