import { FC } from 'react'
import { IPokemonInfo } from '../../interfaces/components'
import { colorTypeGradients } from '../../utils/TypeSwitch'

export const PokemonInfo: FC<IPokemonInfo> = ({ pokemon, children }) => {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  return (
    <div className='flex w-full'>
      <div className='flex max-w-3xl w-full p-6 bg-secondary rounded-lg overflow-hidden shadow-lg'>
        <div className='flex flex-col w-full gap-2'>
          <div className='flex justify-between'>
            <div className='text-xl'>
              {name} #{pokemon.id}
            </div>
            <div className='flex justify-end gap-1'>
              {pokemon.types.map((type, i) => {
                const bgColor = colorTypeGradients(type.type.name)
                return (
                  <div key={i} className='bg-contrast rounded-lg h-min p-[1px]'>
                    <div
                      className='type-text flex px-2.5 bg-contrast text-white rounded-md'
                      style={{
                        backgroundColor: `${bgColor}`,
                      }}>
                      {type.type.name}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='flex gap-2 flex-col sm:flex-row'>
            <img
              src={pokemon.sprites.other?.dream_world.front_default}
              className='max-h-40 '
            />
            <div className='gap-1 flex justify-center flex-wrap h-fit sm:w-52 bg-red-300'>
              {pokemon.stats.map((stat, i) => {
                //buncha stupid
                let statname = stat.stat.name
                if (statname === 'hp') statname = 'HP'
                if (statname === 'attack') statname = 'Atk'
                if (statname === 'defense') statname = 'Def'
                if (statname === 'special-defense') statname = 'Sp.Def'
                if (statname === 'special-attack') statname = 'Sp.Atk'
                if (statname === 'speed') statname = 'Speed'
                return (
                  <div
                    key={stat.stat.name}
                    className='flex min-w-[4rem] bg-blue-500 rounded-md flex-col items-center'>
                    <div>{stat.base_stat}</div>
                    <div>{statname}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div>Height: {pokemon.height / 10} m</div>
          <div>Weight: {pokemon.weight / 10} kg</div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
