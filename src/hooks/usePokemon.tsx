import { useQuery } from 'react-query'
import { apiUrl } from '../pages/PokeDex'
import { IPokemon } from '../interfaces/pokemon'

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
