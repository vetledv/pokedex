import { FC } from 'react'

export const PokemonInfoLoadingOrError: FC = ({ children }) => {
  return (
    <div className='flex max-w-[712.15px] w-full p-6 h-80 bg-secondary rounded-lg overflow-hidden shadow-lg'>
      <div className='flex flex-col w-full gap-2'>
        <div className='flex justify-between'>
          <div className='text-xl'>{children}</div>
          <div className='flex justify-end gap-1'></div>
        </div>
        <div className='flex gap-2 flex-col sm:flex-row'>
          <img className='max-h-40 ' />
          <div className='gap-1 flex justify-center flex-wrap sm:w-52 bg-red-300'></div>
        </div>
      </div>
    </div>
  )
}
