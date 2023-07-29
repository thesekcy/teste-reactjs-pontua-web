import { useEffect, useState, useRef, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useMarvelApi } from '../../hooks/useMarvelApi'
import createParamsToMarvelApiRequest from '../../services/createParamsToMarvelApiRequest'
import SpinnerLoading from '../../components/spinnerLoading'
import { MarvelCharacter } from '../../types'
import * as Tabs from '@radix-ui/react-tabs'
import PlaceholderCharacter from '../../assets/min-placeholder.png'
import './styles.css'

export default function Profile() {
  const { id } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [hero, setHero] = useState<MarvelCharacter>()
  const marvelApi = useMarvelApi()
  const marvelApiRef = useRef(marvelApi)

  const params = useMemo(() => createParamsToMarvelApiRequest(), [])

  useEffect(() => {
    const getCharacter = async () => {
      try {
        setLoading(true)
        const { data } = await marvelApiRef.current.getCharacter(params, id)
        console.log(data)
        setHero(data.results[0])
        setLoading(false)
      } catch (error) {
        alert(error)
      }
    }

    getCharacter()
  }, [id, params])

  if (loading) {
    return <SpinnerLoading />
  } else {
    return (
      <div className="profile">
        <h2 className="mb-4">
          Perfil <span className="bar">/</span>{' '}
          <span className="hero-name">{hero?.name}</span>
        </h2>

        <Tabs.Root className="TabsRoot" defaultValue="geral">
          <Tabs.List className="TabsList mb-4" aria-label="Manage your account">
            <Tabs.Trigger className="TabsTrigger" value="geral">
              Visão Geral
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="teams">
              Teams
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="powers">
              Powers
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="species">
              Species
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="authors">
              Authors
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="TabsContent" value="geral">
            <div className="card">
              <div className="d-flex">
                <img
                  src={
                    hero?.thumbnail.path.includes('image_not_available')
                      ? PlaceholderCharacter
                      : `${hero?.thumbnail.path}.${hero?.thumbnail.extension}`
                  }
                  alt={hero?.name}
                />
              </div>
              <div className="d-flex">
                <h3>{hero?.name}</h3>
                <p>
                  {hero?.description
                    ? hero?.description
                    : 'Agente sem descrição'}
                </p>
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="teams">
            <ul>
              <li>Avengers</li>
              <li>Defenders</li>
              <li>Fantastic Four</li>
              <li>Future Foundation</li>
              <li>Heroes for Hire</li>
              <li>The New Avengers</li>
              <li>X-Mansion</li>
            </ul>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="powers">
            <ul>
              <li>Agility</li>
              <li>Genius</li>
              <li>Genius-level intellect</li>
              <li>Precognitive</li>
              <li>Precognitive spider-sense</li>
              <li>Speed</li>
              <li>Spider-sense</li>
              <li>Superhuman strength</li>
            </ul>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="species">
            <ul>
              <li>Mutate</li>
            </ul>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="authors">
            <ul>
              <li>Stan Lee</li>
              <li>Steve Ditko</li>
            </ul>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    )
  }
}
