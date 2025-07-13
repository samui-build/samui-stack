import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { testRender } from '~/lib/helpers/test-render'
import { UiLabelTitle } from './ui-label-title'

describe('UiLabelTitle', () => {
  it('should render children correctly', () => {
    const testText = 'Test Label'
    testRender(<UiLabelTitle>{testText}</UiLabelTitle>)
    expect(screen.getByText(testText)).toBeInTheDocument()
  })
})
