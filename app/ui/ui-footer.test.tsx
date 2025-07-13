import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { testRender } from '~/lib/helpers/test-render'
import { UiFooter } from './ui-footer'

describe('UiFooter', () => {
  it('should render the app name and copyright year', () => {
    testRender(<UiFooter />)
    expect(screen.getByText('Scaffold Test © 2025')).toBeInTheDocument()
  })
})
