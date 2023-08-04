import Logo from '../../../assets/logo_pontua.svg'
import SideBarItem from '../sideBarItem'
import { LogOutIcon } from '../../../assets/icons/logout'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/auth/authContext'

import fakeDb from '../../../fake_db.json'
import SpinnerLoading from '../../spinnerLoading'
import iconMap from '../../../assets/icons/iconMap'
import { MenuIcon } from '../../../assets/icons/menu'

type MenuItemType = {
  title: string;
  link: string;
  icon: string;
  restriction: string;
  activeType?: string;
};

export default function SideBar() {
  const currentPath = window.location.pathname
  const [open, setOpen] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [loading, setLoading] = useState<boolean>(false)
  const [menus, setMenus] = useState<MenuItemType[][]>([])
  const { user, signOut } = useContext(AuthContext)
  const initialWindowWidth = window.innerWidth

  useEffect(() => {
    setLoading(true)
    // Chamada a api
    async function getMenus() {
      const fakeMenus: MenuItemType[][] = await fakeDb.menus //Await sem effect, apenas para 'simular'
      setMenus(fakeMenus)
    }
    getMenus()
    setLoading(false)
  }, [])

  useEffect(() => {
    if (initialWindowWidth < 991) {
      setOpen(false)
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (windowWidth < 991) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [initialWindowWidth, windowWidth])

  if (loading) {
    return <SpinnerLoading />
  }

  return (
    <div className={`sidebar ${open ? 'show' : 'hide'}`}>
      <div className="d-flex">
        <div className="menu">
          <button className="menu-btn" onClick={() => setOpen((prev) => !prev)}>
            <MenuIcon />
          </button>
        </div>
        <div className="brand">
          <a href="/">
            <img src={Logo} alt="Logo Pontua Web" />
          </a>
        </div>
      </div>
      {menus.map((menu, index) => {
        return (
          <div className="side-bar-items" key={index}>
            {menu.map((item, index) => {
              const Icon = iconMap[item.icon]

              if (item.restriction === 'admin' && user?.user_type !== 'admin')
                return

              return (
                <SideBarItem
                  key={index}
                  icon={<Icon />}
                  text={item.title}
                  link={item.link}
                  menuOpen={open}
                  active={
                    item.activeType
                      ? item.activeType === 'contain'
                        ? currentPath.includes(item.link)
                        : currentPath === item.link
                      : currentPath === item.link
                  }
                />
              )
            })}
          </div>
        )
      })}

      <div className="side-bar-items-footer">
        <SideBarItem
          icon={<LogOutIcon />}
          text="Sair"
          menuOpen={open}
          onClick={() => {
            signOut()
          }}
          active={false}
        />
      </div>
    </div>
  )
}
