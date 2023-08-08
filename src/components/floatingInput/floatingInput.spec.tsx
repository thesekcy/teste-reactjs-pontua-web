import { describe, it } from 'vitest'
import { fireEvent, render, waitFor } from '@testing-library/react'
import FloatingInputComponent from '.'

describe('FloatingInputComponent', () => {
  // Tests that the component renders an input element with correct props
  it('should render an input element with correct props', () => {
    const { getByRole } = render(
      <FloatingInputComponent name="test" placeholder="test placeholder" />
    )
    const inputElement = getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('name', 'test')
    expect(inputElement).toHaveAttribute('placeholder', 'test placeholder')
  })

  // Tests that the component renders an icon element with correct props
  it('should render an icon element with correct props', () => {
    const icon = <svg data-testid="test-icon" />
    const { getByTestId } = render(<FloatingInputComponent icon={icon} />)
    const iconElement = getByTestId('test-icon')
    expect(iconElement).toBeInTheDocument()
  })

  // Tests that the component sets isFocused state to true on input focus
  it('should set isFocused state to true on input focus', () => {
    const { container, getByRole } = render(<FloatingInputComponent />)
    const inputElement = getByRole('textbox')
    const inputIconElement = container.getElementsByClassName('icon')

    fireEvent.focus(inputElement)

    expect(inputElement).toHaveClass('form-control')
    waitFor(() => expect(inputIconElement).toHaveClass('focused'))
  })

  // Tests that the component sets isFocused state to false on input blur
  it('should set isFocused state to false on input blur', () => {
    const { getByRole } = render(<FloatingInputComponent />)
    const inputElement = getByRole('textbox')
    fireEvent.focus(inputElement)
    fireEvent.blur(inputElement)
    expect(inputElement).toHaveClass('form-control')
    expect(inputElement).not.toHaveClass('focused')
  })

  // Tests that the component renders without error when className prop is not provided
  it('should render without error when className prop is not provided', () => {
    const { getByRole } = render(<FloatingInputComponent />)
    const inputElement = getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })

  // Tests that the component passes registerProps to input element
  it('should pass registerProps to input element', () => {
    const register = {
      onChange: async () => {},
      onBlur: async () => {},
      ref: () => {},
      name: 'test',
      value: 'test value',
    }

    const { getByRole } = render(
      <FloatingInputComponent register={register} />
    )
    const inputElement = getByRole('textbox')
    expect(inputElement).toHaveAttribute('name', 'test')
    expect(inputElement).toHaveAttribute('value', 'test value')
  })

  // Tests that the component applies mb class to custom-form div when mb prop is provided
  it('should apply mb class to custom-form div when mb prop is provided', () => {
    const { container } = render(<FloatingInputComponent mb="3" />)

    const customFormElement = container.getElementsByClassName('custom-form')
    waitFor(() => expect(customFormElement).toHaveClass('mb-3'))
  })

  // Tests that the component applies className to input element when className prop is provided
  it('should apply className to input element when className prop is provided', () => {
    const { getByRole } = render(
      <FloatingInputComponent className="test-class" />
    )
    const inputElement = getByRole('textbox')
    expect(inputElement).toHaveClass('test-class')
  })
})
