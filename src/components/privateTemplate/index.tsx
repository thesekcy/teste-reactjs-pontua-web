import React, { ReactNode } from 'react'
import SearchBar from './searchBar'
import SideBar from './sideBar'

interface PrivateTemplateProps {
  children: ReactNode;
}

const PrivateTemplate: React.FC<PrivateTemplateProps> = ({ children }) => {
  return (
    <div className="private-template">
      <nav>
        <SideBar />
      </nav>
      <div className="private-content">
        <SearchBar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default PrivateTemplate
