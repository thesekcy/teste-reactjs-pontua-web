import Logo from '../../../assets/logo_pontua.svg'
import SideBarItem from '../sideBarItem'

export default function SideBar(){
  return(
    <div className="sidebar">
      <div className="brand">
        <img src={Logo} alt="Logo Pontua Web" />
      </div>
      <div className="side-bar-items">
        <SideBarItem/>
        <SideBarItem/>
        <SideBarItem/>
      </div>
      <div className="side-bar-items-footer">
        <SideBarItem/>
      </div>
    </div>
  )
}