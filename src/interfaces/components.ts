import { Dispatch, SetStateAction } from 'react'
import { IPokemon, Result, Type } from './pokemon'

export type DarkModeState = 'dark' | 'light'
export type SetDarkModeState = Dispatch<SetStateAction<DarkModeState>>

export interface IUseDarkMode {
  colorTheme: DarkModeState
  setTheme: SetDarkModeState
}

export interface IPokemonData {
  pokemonData: Result[]
  setPokemonData: Dispatch<SetStateAction<Result[]>>
}
export interface IPokemonDetails {
  pokemonDetails: IPokemon[]
  setPokemonDetails: Dispatch<SetStateAction<IPokemon[]>>
}

export interface IPokemonInfo {
  pokemonData: IPokemon
  pokemonTypes: Type[]
}

export interface IFrontPageProps {
  pokemonData: Result[]
  setPokemonData: Dispatch<SetStateAction<Result[]>>
  pokemonDetails: IPokemon[]
  setPokemonDetails: Dispatch<SetStateAction<IPokemon[]>>
}
