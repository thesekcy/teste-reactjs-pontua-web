import axios from 'axios'

// VITE_MARVEL_CHARACTERS_BASE_URL
// VITE_MARVEL_PUBLIC_KEY
// VITE_MARVEL_PRIVATE_KEY

const api = axios.create({
  baseURL: import.meta.env.VITE_MARVEL_BASE_URL,
})

export const useMarvelApi = () => ({
  // TODO: arrumar
  getAllCharacters: async (params: any) => {
    const res = await api.get('/characters', { params })
    console.log(res)
    return res.data
  },
  getCharacter: async (params: any, id: number) => {
    const res = await api.get(`/characters/${id}`, { params })
    console.log(res)
    return res.data
  },

})
