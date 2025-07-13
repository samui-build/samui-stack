import { Box, Text } from '@mantine/core'
import React from 'react'
import { useUi } from '~/ui/ui-context'

export function UiFooter() {
  const { config } = useUi()
  return (
    <Box component="footer" ta="center" p="xs">
      <Text size="xs" c="dimmed">
        {config.name} &copy; 2025
      </Text>
    </Box>
  )
}
