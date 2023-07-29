import React from 'react'

export default function SideBarItem({ icon, text, link, active }) {
  return (
    <div className={`sidebar-item ${active && 'active'}`}>
      <a href={link}>
        {icon && React.cloneElement(icon)}
        {text && <span>{text}</span>}
      </a>
    </div>
  )
}
