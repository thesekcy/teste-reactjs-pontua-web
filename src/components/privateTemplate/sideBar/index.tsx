import Logo from '../../../assets/logo_pontua.svg'
import SideBarItem from '../sideBarItem'
import { LogOutIcon } from '../../../assets/icons/logout'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/auth/authContext'

import fakeDb from '../../../fake_db.json'
import SpinnerLoading from '../../spinnerLoading'
import iconMap from '../../../assets/icons/iconMap'

type MenuItemType = {
  title: string;
  link: string;
  icon: string;
  restriction: string;
  activeType?: string;
};

export default function SideBar() {
  const currentPath = window.location.pathname
  const { user, signOut } = useContext(AuthContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [menus, setMenus] = useState<MenuItemType[][]>([])

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

  if (loading) {
    return <SpinnerLoading />
  }

  return (
    <div className="sidebar">
      <div className="brand">
        <a href="/">
          <img src={Logo} alt="Logo Pontua Web" />
        </a>
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
          onClick={() => {
            signOut()
          }}
          active={false}
        />
      </div>
    </div>
  )
}
