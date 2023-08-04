import { InputHTMLAttributes, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
  icon?: JSX.Element;
  mb?: '1' | '2' | '3' | '4' | '5'; //Margin Bottom
}

export default function FloatingInputComponent({
  icon,
  mb,
  register,
  ...rest
}: FloatingInputProps) {
  const [isFocused, setFocused] = useState(false)

  const { ...registerProps } = { ...register }

  const { className } = { ...rest }

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
  }

  return (
    <div className={`custom-form ${mb && `mb-${mb}`}`}>
      <div className={`icon ${isFocused ? 'focused' : ''}`}>{icon}</div>
      <input
        {...rest}
        {...registerProps}
        className={`form-control ${className}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}
