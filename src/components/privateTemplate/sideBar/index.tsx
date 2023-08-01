import Logo from '../../../assets/logo_pontua.svg'
import SideBarItem from '../sideBarItem'
import { DashboardIcon } from '../../../assets/icons/dashboard'
import { ProfileIcon } from '../../../assets/icons/profile'
import { LogOutIcon } from '../../../assets/icons/logout'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/Auth/AuthContext'

export default function SideBar() {
  const currentPath = window.location.pathname
  const auth = useContext(AuthContext)

  return (
    <div className="sidebar">
      <div className="brand">
        <a href="/">
          <img src={Logo} alt="Logo Pontua Web" />
        </a>
      </div>
      <div className="side-bar-items">
        <SideBarItem
          icon={<DashboardIcon />}
          text="Home"
          link="/"
          active={currentPath === '/' || currentPath === '/dashboard'}
        />
        <SideBarItem
          icon={<ProfileIcon />}
          text="Perfil"
          link="/profile"
          active={currentPath.includes('/profile')}
        />
      </div>
      <div className="side-bar-items-footer">
        <SideBarItem
          icon={<LogOutIcon />}
          text="Sair"
          onClick={() => {
            auth.signOut()
          }}
          active={false}
        />
      </div>
    </div>
  )
}
