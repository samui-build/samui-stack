import { CodeHighlightTabs } from '@mantine/code-highlight'

export function UiDebug({ data }: { data: string | unknown }) {
  return (
    <CodeHighlightTabs
      defaultExpanded={false}
      withExpandButton
      code={[
        {
          fileName: 'debug.json',
          code: typeof data === 'string' ? data : JSON.stringify(data, undefined, 2),
          language: 'json',
        },
      ]}
    />
  )
}
