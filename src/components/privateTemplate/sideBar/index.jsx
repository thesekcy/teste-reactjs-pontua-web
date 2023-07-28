import Logo from '../../../assets/logo_pontua.svg'
import SideBarItem from '../sideBarItem'
import { DashboardIcon } from '../../../assets/icons/dashboard'
import { ProfileIcon } from '../../../assets/icons/profile'
import { LogOutIcon } from '../../../assets/icons/logout'

export default function SideBar() {
  const currentPath = window.location.pathname

  return (
    <div className="sidebar">
      <div className="brand">
        <img src={Logo} alt="Logo Pontua Web" />
      </div>
      <div className="side-bar-items">
        <SideBarItem icon={<DashboardIcon/>} text="Home" link="/" active={currentPath === '/' || currentPath === '/dashboard'}/>
        <SideBarItem icon={<ProfileIcon/>} text="Perfil" link="/profile" active={currentPath.includes('/profile') }/>
      </div>
      <div className="side-bar-items-footer">
        <SideBarItem icon={<LogOutIcon/>} text="Sair" link="/logout" />
      </div>
    </div>
  )
}
