import md5 from 'md5'

const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY

const createParamsToMarvelApiRequest = (currentPage?: number, searchQuery?: string) => {

  const timestamp = new Date().getTime()
  const hash = md5(timestamp + privateKey + publicKey)

  const offset = currentPage !== undefined ? (currentPage - 1) * 10 : 0
  
  return {
    ts: timestamp,
    apikey: publicKey,
    hash: hash,
    limit: 10,
    offset: offset,
    nameStartsWith: searchQuery && searchQuery.length > 1 ? searchQuery : undefined,
  }
}

export default createParamsToMarvelApiRequest