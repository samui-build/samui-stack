import { Group, Image, Text } from '@mantine/core'
import { useUi } from './ui-context'

export interface AppLogoProps {
  size?: number
}

export function UiLogo({ size = 42 }: AppLogoProps) {
  const { config } = useUi()

  return (
    <Group align="center" gap="xs" wrap="nowrap">
      <Image src={config.logo} alt="logo" height={size} width={size} />
      <Text size="lg" fw="bold" visibleFrom="sm">
        {config.name}
      </Text>
    </Group>
  )
}
