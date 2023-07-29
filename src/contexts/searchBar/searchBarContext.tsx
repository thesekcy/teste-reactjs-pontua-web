import { createContext } from 'react'

export type SearchBarContextType = {
  searchQuery: string
  setSearchQuery: (query: string) => void;
};

export const SearchBarContext = createContext<SearchBarContextType>(null!)
