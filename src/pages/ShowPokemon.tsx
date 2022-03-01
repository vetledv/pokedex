import { Link, useParams } from 'react-router-dom'
import { PokemonInfo } from '../components/PokemonInfo'
import { usePokemonByID } from './../hooks/usePokemon'

type PokemonParams = { id: string }

export const ShowPokemon = () => {
  const { id } = useParams<PokemonParams>()
  const checkID = () => {
    if (id === undefined) {
      const undefID: string = 'error'
      return undefID
    } else {
      return id
    }
  }
  const pokemon = usePokemonByID(checkID())

  if (pokemon.isLoading) {
    return (
      <>
        <div className='mt-20'></div>
        <Link to={'/'}>
          <div className='p-2 bg-orange-400 w-16'>Back</div>
        </Link>
        <div>Loading...</div>
      </>
    )
  }
  if (pokemon.isError) {
    return (
      <>
        <div className='mt-20'></div>
        <Link to={'/'}>
          <div className='p-2 bg-orange-400 w-16'>Back</div>
        </Link>
        <div>Error {pokemon.error.message}</div>
      </>
    )
  }

  if (pokemon.isFetched && pokemon.data !== undefined) {
    return (
      <>
        <div className='mt-20'></div>
        <PokemonInfo pokemon={pokemon.data}></PokemonInfo>
      </>
    )
  } else return <div>oops</div>
}
