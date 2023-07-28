import { SearchIcon } from '../../../assets/icons/search'
export default function SearchBar() {
  return (
    <div className="search-bar">
      <SearchIcon />
      <input type="text" placeholder="Busque um agente" />
    </div>
  )
}
