import React from 'react'

interface CommonProps {
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
}

interface ButtonProps extends CommonProps {
  title?: string;
  link?: string;
  icon?: JSX.Element;
  openMenu?: boolean;
  openContact?: boolean;
  iconSide?: 'right' | 'left';
  submit?: boolean;
  size?: 'sm' | 'md' | 'lg';
  width?: 'fit' | 'full';
  customClass?: string;
  theme?: 'text' | 'default';
  type?: 'button' | 'submit' | 'reset'; // Specify the allowed types for the <button> element
}

function ButtonComponent({
  title,
  link,
  icon,
  iconSide = 'left',
  size,
  width,
  customClass,
  theme = 'default',
  type,
  ...events
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const renderIcon = (marginSide = 'me-2') => {
    if (!icon) return null

    return <span className={marginSide}>{icon}</span>
  }

  const buttonClassName = `button btn-${theme} ${size} ${width} ${customClass}`
  const rightIconsClassName = 'ms-2 right-icon'
  const leftIconsClassName = 'me-2 left-icon'

  if (link) {
    return (
      <a href={link} className={buttonClassName} {...events}>
        {iconSide === 'left' && renderIcon(leftIconsClassName)}
        <span>{title}</span>
        {iconSide === 'right' && renderIcon(rightIconsClassName)}
      </a>
    )
  }

  return (
    <button type={type} className={buttonClassName} {...events}>
      {iconSide === 'left' && renderIcon(leftIconsClassName)}
      <span>{title}</span>
      {iconSide === 'right' && renderIcon(rightIconsClassName)}
    </button>
  )
}

export default ButtonComponent
