import { useParams } from 'react-router-dom'
import { IconButton } from '../components/IconButton'
import { PokemonInfo } from '../components/PokemonInfo'
import { ArrowLeftIcon } from '../components/Icons'
import { pokemonParams } from '../interfaces/components'
import { usePokemonByID } from './../hooks/usePokemon'

const checkParamUndef = (param: string | undefined) => {
  if (param === undefined) {
    const undefParam: string = 'error'
    return undefParam
  } else return param
}

export const ShowPokemon = () => {
  const { name, id } = useParams<pokemonParams>()
  const pokemon = usePokemonByID(checkParamUndef(name || id))

  if (pokemon.isLoading) {
    return (
      <>
        <div className='flex flex-row pb-6 px-2'>
          <IconButton text={'Back'} icon={<ArrowLeftIcon />} />
        </div>
        <div>Loading...</div>
      </>
    )
  }
  if (pokemon.isError) {
    return (
      <>
        <div className='flex flex-row pb-6 px-2'>
          <IconButton text={'Back'} icon={<ArrowLeftIcon />} />
        </div>
        <div>Error {pokemon.error.message}</div>
      </>
    )
  }

  if (pokemon.isFetched && pokemon.data !== undefined) {
    return <PokemonInfo pokemon={pokemon.data}></PokemonInfo>
  } else {
    return (
      <>
        <div className='flex flex-row pb-6 px-2'>
          <IconButton text={'Back'} icon={<ArrowLeftIcon />} />
        </div>
        <div>Loading...</div>
      </>
    )
  }
}
