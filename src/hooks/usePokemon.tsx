import { useQuery } from 'react-query'
import { IData, IPokemon } from '../interfaces/pokemon'
import { apiUrl } from '../pages/PokeDex'

export const usePokemonByID = (pokemonID: string) => {
  return useQuery<IPokemon, Error>(
    ['pokemonID', pokemonID],
    fetchPokemon(pokemonID)
  )
}
export const usePokemonByName = (pokemonName: string) => {
  return useQuery<IPokemon, Error>(
    ['pokemonName', pokemonName],
    fetchPokemon(pokemonName)
  )
}
const fetchPokemon = (pokemonID: string) => {
  return async () => {
    const response = await fetch(apiUrl + `/${pokemonID}`)
    return await response.json()
  }
}

export const useGetPokemonData = (url: string) => {
  return useQuery<IData, Error>('pokeDexData', fetchPokeDexData(url))
}
const fetchPokeDexData = (url: string) => {
  return async () => {
    const response = await fetch(url)
    const data: IData = await response.json()
    return data
  }
}
