import { useEffect, useState, useRef, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useMarvelApi } from '../../hooks/useMarvelApi'
import createParamsToMarvelApiRequest from '../../services/createParamsToMarvelApiRequest'
import SpinnerLoading from '../../components/SpinnerLoading'
import { IMarvelCharacter } from '../../types'
import TabsProfile from '../../components/TabsProfile'

export default function Profile() {
  const { id } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [character, setCharacter] = useState<IMarvelCharacter>()
  const [comics, setComics] = useState()
  const marvelApi = useMarvelApi()
  const marvelApiRef = useRef(marvelApi)

  const paramsCharacters = useMemo(
    () => createParamsToMarvelApiRequest({}),
    []
  )
  const paramsComics = useMemo(
    () => createParamsToMarvelApiRequest({ limit: 100 }),
    []
  )

  useEffect(() => {
    setLoading(true)

    const GetCharacterAndComics = async () => {
      try {
        const [characterResponse, comicsResponse] = await Promise.all([
          marvelApiRef.current.getCharacter(paramsCharacters, Number(id)),
          marvelApiRef.current.getComics(paramsComics, Number(id)),
        ])

        setCharacter(characterResponse.data.results[0])
        setComics(comicsResponse.data.results)
      } catch (error) {
        alert(error)
      }
    }

    GetCharacterAndComics()
    setLoading(false)
  }, [id, paramsCharacters, paramsComics])

  if (loading) {
    return <SpinnerLoading />
  } else {
    return (
      <div className="profile">
        <h2 className="mb-4">
          Perfil <span className="bar">/</span>{' '}
          <span className="hero-name">{character?.name}</span>
        </h2>
        <TabsProfile character={character!} comics={comics!} />
      </div>
    )
  }
}
