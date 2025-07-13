import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { testRender } from '~/lib/helpers/test-render'
import { UiError } from './ui-error'

describe('UiError', () => {
  it('should render null when error prop is null', () => {
    testRender(<UiError error={null} />)
    expect(screen.queryByText('An error occurred')).not.toBeInTheDocument()
  })

  it('should render null when error prop is undefined', () => {
    testRender(<UiError error={undefined} />)
    expect(screen.queryByText('An error occurred')).not.toBeInTheDocument()
  })

  it('should display the error message when error is an Error object', () => {
    const errorMessage = 'This is a test error'
    const error = new Error(errorMessage)
    testRender(<UiError error={error} />)
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
    expect(screen.getByText('An error occurred')).toBeInTheDocument()
  })

  it('should display the error message when error is a string', () => {
    const errorMessage = 'Another test error string'
    testRender(<UiError error={errorMessage as any} />) // Cast to any because the prop type expects Error | null
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
    expect(screen.getByText('An error occurred')).toBeInTheDocument()
  })
})
