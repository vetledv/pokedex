import React from 'react'
import { Link } from 'react-router-dom'
import { IPokemonInfo } from '../interfaces/components'

export const PokemonInfo = (props: IPokemonInfo) => {
  return (
    <div>
      <Link to={'/'}>
        <div className='p-2 bg-orange-400 w-16'>Back</div>
      </Link>
      <div>Name: {props.pokemonData.name}</div>
      <div>ID: {props.pokemonData.id}</div>
      <div>Height: {props.pokemonData.height}</div>
      <div>Weight: {props.pokemonData.weight}</div>
      <div>Type:</div>
      {props.pokemonTypes.map((types, i) => (
        <div key={i}>{types.type.name}</div>
      ))}
      <img src={props.pokemonData.sprites.front_default} />
    </div>
  )
}
