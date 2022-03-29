import { useQuery } from 'react-query'
import { IData, IPokemon, Species } from '../interfaces/pokemon'
import { ISpecies } from '../interfaces/species'
import { apiUrl } from '../pages/PokeDex'

export const fetchPokemonByName = (pokemonID: string) => {
  return async () => {
    const response = await fetch(apiUrl + `/${pokemonID}`)
    return await response.json()
  }
}
const fetchPokemonByID = (pokemonID: string) => {
  return async () => {
    const response = await fetch(apiUrl + `/id/${pokemonID}`)
    return await response.json()
  }
}
export const usePokemonByID = (pokemonID: string) => {
  return useQuery<IPokemon, Error>(
    ['pokemonID', pokemonID],
    fetchPokemonByID(pokemonID)
  )
}
export const usePokemonByName = (pokemonName: string) => {
  return useQuery<IPokemon, Error>(
    ['pokemonName', pokemonName],
    fetchPokemonByName(pokemonName)
  )
}

export const usePokemonSpecies = (species: Species | undefined) => {
  return useQuery<ISpecies, Error>(
    ['Species', species?.name],
    fetchPokeDexData(species?.url),
    {
      enabled: !!species,
    }
  )
}

export const useGetPokeDexData = (url: string) => {
  return useQuery<IData, Error>('pokedexData', fetchPokeDexData(url))
}
export const fetchPokeDexData = (url: string | undefined) => {
  return async () => {
    if (url) {
      const response = await fetch(url)
      const data = await response.json()
      return data
    }
  }
}
