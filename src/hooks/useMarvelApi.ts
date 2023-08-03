import axios from 'axios'
import { IMarvelApiParams } from '../types'

const api = axios.create({
  baseURL: import.meta.env.VITE_MARVEL_BASE_URL,
})

export const useMarvelApi = () => ({
  getAllCharacters: async (params: IMarvelApiParams) => {
    const res = await api.get('/characters', { params })
    return res.data
  },
  getCharacter: async (params: IMarvelApiParams, id: number) => {
    const res = await api.get(`/characters/${id}`, { params })
    return res.data
  },
  getComics: async (params: IMarvelApiParams, id: number) => {
    const res = await api.get(`/characters/${id}/comics`, { params })
    return res.data
  },

})
