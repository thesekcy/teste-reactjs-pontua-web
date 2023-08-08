import { describe, it } from 'vitest'
import ButtonComponent from '.'
import { render } from '@testing-library/react'

describe('ButtonComponent', () => {
  // Tests that the component renders a button with a title
  it('should render a button with a title', () => {
    const { getByText } = render(<ButtonComponent title="Test Title" />)
    expect(getByText('Test Title')).toBeInTheDocument()
  })

  // Tests that the component renders a button with a link
  it('should render a button with a link', () => {
    const { getByRole } = render(
      <ButtonComponent link="https://example.com" />
    )
    expect(getByRole('link')).toHaveAttribute('href', 'https://example.com')
  })

  // Tests that the component renders a button with an icon
  it('should render a button with an icon', () => {
    const { getByTestId } = render(
      <ButtonComponent icon={<span data-testid="test-icon" />} />
    )
    expect(getByTestId('test-icon')).toBeInTheDocument()
  })

  // Tests that the component renders a button with an icon on the right side
  it('should render a button with an icon on the right side', () => {
    const { getByTestId } = render(
      <ButtonComponent
        icon={<span data-testid="test-icon" />}
        iconSide="right"
      />
    )
    expect(getByTestId('test-icon')).toBeInTheDocument()
  })

  // Tests that the component renders a button with a custom class
  it('should render a button with a custom class', () => {
    const { container } = render(<ButtonComponent customClass="test-class" />)
    expect(container.firstChild).toHaveClass('test-class')
  })

  // Tests that the component renders a button with a small size
  it('should render a button with a small size', () => {
    const { container } = render(<ButtonComponent size="sm" />)
    expect(container.firstChild).toHaveClass('btn-default sm')
  })

  // Tests that the component renders a button with a medium size
  it('should render a button with a medium size', () => {
    const { container } = render(<ButtonComponent size="md" />)
    expect(container.firstChild).toHaveClass('btn-default md')
  })

  // Tests that the component renders a button with a large size
  it('should render a button with a large size', () => {
    const { container } = render(<ButtonComponent size="lg" />)
    expect(container.firstChild).toHaveClass('btn-default lg')
  })

  // Tests that the component renders a button with a fit width
  it('should render a button with a fit width', () => {
    const { container } = render(<ButtonComponent width="fit" />)
    expect(container.firstChild).toHaveClass('fit')
  })

  // Tests that the component renders a button with a full width
  it('should render a button with a full width', () => {
    const { container } = render(<ButtonComponent width="full" />)
    expect(container.firstChild).toHaveClass('full')
  })

  // Tests that the component renders a button with a text theme
  it('should render a button with a text theme', () => {
    const { container } = render(<ButtonComponent theme="text" />)
    expect(container.firstChild).toHaveClass('btn-text')
  })

  // Tests that the component renders a button with a submit type
  it('should render a button with a submit type', () => {
    const { container } = render(<ButtonComponent type="submit" />)
    expect(container.firstChild).toHaveAttribute('type', 'submit')
  })
})
