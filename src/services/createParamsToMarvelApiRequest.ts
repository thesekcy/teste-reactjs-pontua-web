import md5 from 'md5'
import { IMarvelApiParams } from '../types'

const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY

const createParamsToMarvelApiRequest = ({
  currentPage,
  searchQuery,
  character,
  limit = 10
}: {
  currentPage?: number;
  searchQuery?: string;
  character?: string;
  limit?: number | undefined;
}) => {

  const timestamp = new Date().getTime()
  const hash = md5(timestamp + privateKey + publicKey)

  const offset = currentPage !== undefined ? (currentPage - 1) * 10 : 0

  let params: IMarvelApiParams = {
    ts: timestamp,
    apikey: publicKey,
    hash: hash,
    limit: limit,
  }

  if (searchQuery && searchQuery.length > 1) {
    params = {
      ...params,
      nameStartsWith: searchQuery,
    }
  }

  if (currentPage !== undefined) {
    params = {
      ...params,
      offset: offset,
    }
  }

  if (character && character.length > 1) {
    params = {
      ...params,
      character: character,
    }
  }

  return params
}

export default createParamsToMarvelApiRequest