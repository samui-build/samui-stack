import { render as testingLibraryRender } from '@testing-library/react'
import React from 'react'
import { UiThemeProvider } from '~/ui/ui-theme-provider'
import { UiContextProvider } from '~/ui/ui-context-provider'

export function testRender(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <UiContextProvider config={{ name: 'Scaffold Test', logo: '/logo.svg' }}>
        <UiThemeProvider colorScheme="dark" env="test">
          {children}
        </UiThemeProvider>
      </UiContextProvider>
    ),
  })
}
