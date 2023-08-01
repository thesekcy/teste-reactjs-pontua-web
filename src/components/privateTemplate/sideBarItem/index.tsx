import React from 'react'

interface SideBarItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: JSX.Element;
  text: string;
  link?: string;
  active: boolean;
}

export default function SideBarItem({
  icon,
  text,
  link,
  active,
  ...rest
}: SideBarItemProps) {
  return (
    <div className={`sidebar-item ${active && 'active'}`}>
      <a href={link} {...rest}>
        {icon && React.cloneElement(icon)}
        {text && <span>{text}</span>}
      </a>
    </div>
  )
}
