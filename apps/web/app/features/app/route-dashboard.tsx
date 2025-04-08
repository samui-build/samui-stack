import { Stack } from '@mantine/core'
import { appMeta } from '~/lib/app-meta'
import { UiCard } from '~/ui/ui-card'
import { UiContainer } from '~/ui/ui-container'
import { UiPage } from '~/ui/ui-page'

export function meta() {
  return appMeta('Dashboard')
}

export default function RouteDashboard() {
  return (
    <UiContainer py="md">
      <UiPage title="Dashboard">
        <Stack>
          <UiCard title="Test">Test</UiCard>
          <UiCard title="Test">Test</UiCard>
        </Stack>
      </UiPage>
    </UiContainer>
  )
}
