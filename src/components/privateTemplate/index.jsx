import SearchBar from './searchBar'
import SideBar from './sideBar'

export default function PrivateTemplate() {
  const currentUrl = window.location.pathname
  return (
    <div className="private-template">
      <nav>
        <SideBar />
      </nav>
      <div className="private-content">
        <SearchBar />
        <main>
          <p>This is a test - {currentUrl}</p>
        </main>
      </div>
    </div>
  )
}
