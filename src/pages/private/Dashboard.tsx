import {
  SetStateAction,
  useEffect,
  useState,
  useContext,
  useRef,
  useMemo,
} from 'react'
import createParamsToMarvelApiRequest from '../../services/createParamsToMarvelApiRequest'

import Pagination from '../../components/pagination'
import { MarvelCharacter } from '../../types'
import { SearchBarContext } from '../../contexts/searchBar/searchBarContext'
import CardCharacter from '../../components/cardCharacter'
import { useMarvelApi } from '../../hooks/useMarvelApi'
import SpinnerLoading from '../../components/spinnerLoading'

export default function Dashboard() {
  const [loading, setLoading] = useState<boolean>(true)
  const [heroes, setHeroes] = useState<MarvelCharacter[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const { searchQuery } = useContext(SearchBarContext)
  const marvelApi = useMarvelApi()
  const marvelApiRef = useRef(marvelApi)

  const params = useMemo(
    () => createParamsToMarvelApiRequest(currentPage, searchQuery),
    [currentPage, searchQuery]
  )

  useEffect(() => {
    const getAllCharacters = async () => {
      try {
        setLoading(true)
        const { data } = await marvelApiRef.current.getAllCharacters(params)

        const heroesData = data.results
        const totalHeroes = data.total
        const totalPages = Math.ceil(totalHeroes / 10)

        setHeroes(heroesData)
        setTotalPages(totalPages)
        setLoading(false)
      } catch (error) {
        alert(error)
      }
    }

    getAllCharacters()
  }, [params])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page)
  }

  if (loading) {
    return <SpinnerLoading />
  } else {
    return (
      <>
        <div className="characters-grid">
          {heroes.map((character: MarvelCharacter, index) => (
            <CardCharacter character={character} key={index} />
          ))}
        </div>

        <hr className="my-4" />
        <div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </>
    )
  }
}
