import React from 'react'
import { IPokemon } from '../interfaces/pokemon'
import { colorTypeGradients } from '../utils/TypeSwitch'
import { IconButton } from './IconButton'
import { ArrowLeftIcon } from './Icons'

export const PokemonInfo = ({ pokemon }: { pokemon: IPokemon }) => {
  return (
    <>
      <div className='flex flex-row pb-6 px-2'>
        <IconButton text={'Back'} icon={<ArrowLeftIcon />} />
      </div>
      <div className='flex justify-center'>
        <div className='flex max-w-2xl bg-secondary rounded-lg overflow-hidden p-2'>
          <div className='flex flex-col'>
            <div className='flex text-xl border-b border-primary'>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </div>
            <div className='flex p-2'>
              <div className='flex flex-col'>
                <div className='flex'>
                  {pokemon.types.map((type, i) => {
                    const bgColor = colorTypeGradients(type.type.name)
                    return (
                      <div
                        key={i}
                        className='rounded-lg bg-contrast text-slate-900 px-4 py-1 mr-1 flex'
                        style={{
                          backgroundColor: `${bgColor}`,
                        }}>
                        {type.type.name}
                      </div>
                    )
                  })}
                </div>
                <div>ID: {pokemon.id}</div>
                <div>Height: {pokemon.height}</div>
                <div>Weight: {pokemon.weight}</div>
              </div>
              <img
                src={pokemon.sprites.other?.['official-artwork'].front_default}
                className='w-48'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
