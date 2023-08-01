import { useEffect, useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { faker } from '@faker-js/faker'

import PlaceholderComics from '../../assets/ComicsPlaceholder.png'
import PlaceholderCharacter from '../../assets/min-placeholder.png'
import { IMarvelCharacter, IMarvelComics } from '../../types'
import getRandomTeams from '../../utils/FakerHeroGenerator/teams'
import RandomNumberInInterval from '../../utils/RandomNumberInInterval'
import getRandomPowers from '../../utils/FakerHeroGenerator/powers'
import getRandomSpecies from '../../utils/FakerHeroGenerator/species'
import ButtonComponent from '../Button'
import FormatTimestamp from '../../utils/FormatDateTimestamp'
import FormatDolarToReal from '../../utils/FormatDolarToReal'
import GetDolarValueInBRL from '../../utils/GetDolarValueInBRL'

export default function TabsProfile({
  character,
  comics,
}: {
  character: IMarvelCharacter;
  comics: IMarvelComics[];
}) {
  const teams = getRandomTeams(RandomNumberInInterval(2, 4))
  const powers = getRandomPowers(RandomNumberInInterval(1, 10))
  const species = getRandomSpecies(RandomNumberInInterval(1, 3))

  const [dolarPriceInBRL, setDolarPriceInBRL] = useState(0)

  const authors = []
  for (let i = 0; i < RandomNumberInInterval(1, 5); i++) {
    const nome = faker.name.fullName()
    authors.push(nome)
  }

  useEffect(() => {
    async function getDolarPrice() {
      const dolarPrice = await GetDolarValueInBRL()
      setDolarPriceInBRL(dolarPrice)
    }

    getDolarPrice()
  }, [])

  return (
    <Tabs.Root className="TabsRoot tabs-profile" defaultValue="geral">
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
        <Tabs.Trigger className="TabsTrigger" value="comics">
          Comics
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="TabsContent" value="geral">
        <div className="card">
          <div className="d-flex">
            <img
              src={
                character?.thumbnail.path.includes('image_not_available')
                  ? PlaceholderCharacter
                  : `${character?.thumbnail.path}.${character?.thumbnail.extension}`
              }
              alt={character?.name}
            />
          </div>
          <div className="d-flex">
            <h3>{character?.name}</h3>
            <p>
              {character?.description
                ? character?.description
                : 'Agente sem descrição'}
            </p>
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="teams">
        <ul>
          {teams.map((team) => (
            <li key={`teams-${team}`}>
              <>{team}</>
            </li>
          ))}
        </ul>
        <p className="opacity-50 mt-5">
          <small>
            Os conteúdos gerados nessa tab são fakes e aleatórios, e mudam a
            cada carregamento.
          </small>
        </p>
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="powers">
        <ul>
          {powers.map((power) => (
            <li key={`power-${power}`}>
              <>{power}</>
            </li>
          ))}
        </ul>
        <p className="opacity-50 mt-5">
          <small>
            Os conteúdos gerados nessa tab são fakes e aleatórios, e mudam a
            cada carregamento.
          </small>
        </p>
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="species">
        <ul>
          {species.map((specie) => (
            <li key={`specie-${specie}`}>
              <>{specie}</>
            </li>
          ))}
        </ul>
        <p className="opacity-50 mt-5">
          <small>
            Os conteúdos gerados nessa tab são fakes e aleatórios, e mudam a
            cada carregamento.
          </small>
        </p>
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="authors">
        <ul>
          {authors.map((author) => (
            <li key={author}>{author}</li>
          ))}
        </ul>
        <p className="opacity-50 mt-5">
          <small>
            Os conteúdos gerados nessa tab são fakes e aleatórios, e mudam a
            cada carregamento.
          </small>
        </p>
      </Tabs.Content>
      <Tabs.Content className="TabsContent comics" value="comics">
        {comics &&
          comics.map((comic: IMarvelComics, index: number) => {
            const urlPurchase = comic.urls.find(
              (url) => url.type === 'purchase'
            )?.url

            return (
              <div key={index} className="card">
                <div className="top">
                  {/* <img
                    className="thumbnail"
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                  /> */}

                  <img
                    src={
                      comic.thumbnail.path.includes('image_not_available')
                        ? PlaceholderComics
                        : `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                    }
                    className="thumbnail"
                    alt={comic.title}
                  />

                  <h6>
                    {FormatTimestamp(comic.dates[0].date) === 'Invalid date'
                      ? 'Data não informada'
                      : FormatTimestamp(comic.dates[0].date)}
                  </h6>
                  <h4>{comic.title}</h4>
                  <p>
                    {comic.description
                      ? comic.description
                      : 'Comic sem descrição'}
                  </p>
                </div>

                <div className="bottom">
                  {urlPurchase && comic.prices[0].price > 1 && (
                    <>
                      <p>
                        {FormatDolarToReal(
                          comic.prices[0].price,
                          dolarPriceInBRL
                        )}
                      </p>
                      <ButtonComponent
                        title="Comprar"
                        size="sm"
                        width="full"
                        customClass="text-center"
                        link={
                          comic.urls.find((url) => url.type === 'purchase')?.url
                        }
                        target="_blank"
                      />
                    </>
                  )}
                </div>
              </div>
            )
          })}
      </Tabs.Content>
    </Tabs.Root>
  )
}
