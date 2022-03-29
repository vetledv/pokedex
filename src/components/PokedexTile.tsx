import { FC } from 'react'
import { Link } from 'react-router-dom'
import { usePokemonByName } from '../hooks/usePokemon'
import { colorTypeGradients } from '../utils/TypeSwitch'
import { IResult } from './../interfaces/pokemon'

export const PokedexTile: FC<IResult> = (props) => {
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
      <div className='p-1 flex flex-wrap w-full md:w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4'>
        <div className=' bg-secondary flex flex-wrap min-w-full rounded-lg overflow-hidden'>
          <div className='flex justify-between min-w-full px-2'>Loading...</div>
        </div>
      </div>
    )
  }
  if (pokemon.isFetched && pokemon.data !== undefined) {
    return (
      <div className='flex w-80'>
        <Link
          to={`/pokemon/${pokemon.data.name}`}
          key={pokemon.data.id}
          className='bg-secondary flex flex-wrap min-w-full rounded-lg overflow-hidden p-2 gap-4'>
          <div
            className='flex justify-between min-w-full p-2'
            style={{
              backgroundColor: colorTypeGradients(
                pokemon.data.types[0].type.name
              ),
            }}>
            <div>{pokemon.data.name}</div>
            <div>#{pokemon.data.id}</div>
          </div>
          <div className='flex min-w-full justify-center'>
            <img src={pokemon.data.sprites.front_default} />
          </div>
          {/* <div className='flex w-full justify-end mt-auto gap-1'>
            {pokemon.data.types.map((type, i) => {
              const bgColor = colorTypeGradients(type.type.name)
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: bgColor,
                  }}
                  className='p-1 px-3 rounded-md text-[#2d3748] flex'>
                  {type.type.name}
                </div>
              )
            })}
          </div> */}
        </Link>
      </div>
    )
  }
  return <div></div>
}
