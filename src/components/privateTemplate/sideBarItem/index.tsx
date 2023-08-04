import React from 'react'

interface SideBarItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: JSX.Element;
  text: string;
  link?: string;
  active: boolean;
  menuOpen: boolean;
}

export default function SideBarItem({
  icon,
  text,
  link,
  active,
  menuOpen,
  ...rest
}: SideBarItemProps) {
  return (
    <div className={`sidebar-item ${active && 'active'}`}>
      <a href={link} {...rest} className={menuOpen ? 'show' : 'hide'}>
        {icon && React.cloneElement(icon)}
        {text && <span>{text}</span>}
      </a>
    </div>
  )
}
