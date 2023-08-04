import { useContext } from 'react'
import { SearchIcon } from '../../../assets/icons/search'
import { SearchBarContext } from '../../../contexts/searchBar/searchBarContext'
export default function SearchBar() {
  const routePath = window.location.pathname
  const { searchQuery, setSearchQuery } = useContext(SearchBarContext)

  return (
    <>
      {routePath === '/' ? (
        <div className="search-bar">
          <SearchIcon />
          <input
            type="text"
            placeholder="Busque um agente"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      ) : (
        <div className="search-bar-no-content"></div>
      )}
    </>
  )
}
