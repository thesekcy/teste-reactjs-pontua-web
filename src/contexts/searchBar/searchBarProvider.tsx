import { SearchBarContext } from './searchBarContext'
import { useState } from 'react'

export const SearchBarProvider = ({ children }: { children: JSX.Element }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <SearchBarContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </SearchBarContext.Provider>
  )
}
