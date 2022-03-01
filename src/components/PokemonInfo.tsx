import React from 'react'
import { Link } from 'react-router-dom'
import { IPokemon } from '../interfaces/pokemon'

export const PokemonInfo = ({ pokemon }: { pokemon: IPokemon }) => {
  return (
    <>
      <Link to={'/'}>
        <div className='p-2 bg-orange-400 w-16'>Back</div>
      </Link>
      <div>Name: {pokemon.name}</div>
      <div>ID: {pokemon.id}</div>
      <div>Height: {pokemon.height}</div>
      <div>Weight: {pokemon.weight}</div>
      <div>
        Type: {pokemon.types[0]?.type.name} {pokemon.types[1]?.type.name}
      </div>
      <img src={pokemon.sprites.front_default} />
    </>
  )
}
