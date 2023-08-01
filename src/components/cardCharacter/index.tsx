import React from 'react'
import { IMarvelCharacter } from '../../types'
import PlaceholderCharacter from '../../assets/min-placeholder.png'

interface CardCharacterProps {
  character: IMarvelCharacter;
}

const CardCharacter: React.FC<CardCharacterProps> = ({ character }) => {
  return (
    <a className="card-character" href={`/profile/${character.id}`}>
      <img
        src={
          character.thumbnail.path.includes('image_not_available')
            ? PlaceholderCharacter
            : `${character.thumbnail.path}.${character.thumbnail.extension}`
        }
        alt={character.name}
      />
      <div className="text">
        <h3>{character.name}</h3>
        <p>
          {character.description
            ? character.description
            : 'Agente sem descrição'}
        </p>
      </div>
    </a>
  )
}

export default CardCharacter
