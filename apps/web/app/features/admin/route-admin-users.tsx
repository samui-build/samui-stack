import { Stack } from '@mantine/core'
import { LucideUsers } from 'lucide-react'
import { appMeta } from '~/lib/app-meta'
import { UiCard } from '~/ui/ui-card'
import { UiContainer } from '~/ui/ui-container'
import { UiPage } from '~/ui/ui-page'

export function meta() {
  return appMeta('Users | Admin')
}

export default function RouteAdminUsers() {
  return (
    <UiPage title="Users" icon={<LucideUsers />}>
      <UiContainer>
        <Stack>
          <UiCard title="Test User">Test User</UiCard>
          <UiCard title="Test User">Test User</UiCard>
        </Stack>
      </UiContainer>
    </UiPage>
  )
}
