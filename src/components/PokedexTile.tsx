import { Link } from 'react-router-dom'
import { usePokemonByName } from '../hooks/usePokemon'
import { Result } from './../interfaces/pokemon'

export const PokedexTile = (props: Result) => {
  const pokemon = usePokemonByName(props.name)
  
  if (pokemon.isError) {
    return (
      <div className=' bg-secondary flex flex-wrap min-w-full rounded-lg overflow-hidden'>
        Error: {pokemon.error.message}
      </div>
    )
  }
  if (pokemon.isLoading) {
    return (
      <div className=' bg-secondary flex flex-wrap min-w-full rounded-lg overflow-hidden'>
        <div className='flex justify-between min-w-full px-2'>
        </div>
        <div className='flex min-w-full'></div>
      </div>
    )
  }
  if (pokemon.isFetched && pokemon.data !== undefined) {
    return (
      <div className='p-1 flex flex-wrap w-full md:w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4'>
        <Link
          to={`/pokemon/${pokemon.data.id}`}
          key={pokemon.data.id}
          className=' bg-secondary flex flex-wrap min-w-full rounded-lg overflow-hidden'>
          <div className='flex justify-between min-w-full px-2'>
            <div>{pokemon.data.name}</div>
            <div>ID: {pokemon.data.id}</div>
          </div>
          <div className='flex min-w-full'>
            <img src={pokemon.data.sprites.front_default} />
          </div>
        </Link>
      </div>
    )
  } else {
    return (
      <div className=' bg-secondary flex flex-wrap min-w-full rounded-lg overflow-hidden'></div>
    )
  }
}
