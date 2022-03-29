import { useParams } from 'react-router-dom'
import { IconButton } from '../components/ShowPokemon/IconButton'
import { ArrowLeftIcon } from '../components/Icons'
import { PokemonInfo } from '../components/ShowPokemon/PokemonInfo'
import { PokemonInfoLoadingOrError } from '../components/ShowPokemon/PokemonInfoLoadingOrError'
import SpeciesInfo from '../components/ShowPokemon/SpeciesInfo'
import { IChildrenJSXEle, pokemonParams } from '../interfaces/components'
import { usePokemonByName, usePokemonSpecies } from './../hooks/usePokemon'

const checkParamUndef = (param: string | undefined) => {
  if (param) return param
  const undefParam: string = 'error'
  return undefParam
}

const PokemonLayout = ({ children }: IChildrenJSXEle) => {
  return (
    <div className='md:flex sm:px-10'>
      <div className='flex flex-row pb-6 h-min'>
        <IconButton text={'Back'} icon={<ArrowLeftIcon />} />
      </div>
      {children}
    </div>
  )
}

const ShowPokemon = () => {
  const params = useParams<pokemonParams>()
  const pokemon = usePokemonByName(checkParamUndef(params.name))
  const speciesDeps = pokemon.data?.species
  const species = usePokemonSpecies(speciesDeps)

  if (pokemon.isSuccess && species.isSuccess) {
    return (
      <PokemonLayout>
        <PokemonInfo pokemon={pokemon.data}>
          <SpeciesInfo {...species.data}></SpeciesInfo>
        </PokemonInfo>
      </PokemonLayout>
    )
  } else
    return (
      <PokemonLayout>
        <>
          {(pokemon.isLoading ||
            species.isLoading ||
            pokemon.isFetching ||
            species.isFetching) && (
            <PokemonInfoLoadingOrError>
              <div>Loading...</div>
            </PokemonInfoLoadingOrError>
          )}

          {pokemon.isError && (
            <PokemonInfoLoadingOrError>
              <div>Error: {pokemon.error.message}</div>
            </PokemonInfoLoadingOrError>
          )}
          {species.isError && (
            <PokemonInfoLoadingOrError>
              <div>Error: {species.error.message}</div>
            </PokemonInfoLoadingOrError>
          )}
        </>
      </PokemonLayout>
    )

  // if (pokemon.isLoading || species.isLoading)
  //   return (
  //     <PokemonLayout>
  //       <PokemonInfoLoadingOrError>
  //         <div>Loading...</div>
  //       </PokemonInfoLoadingOrError>
  //     </PokemonLayout>
  //   )
  // if (pokemon.isFetching || species.isFetching)
  //   return (
  //     <PokemonLayout>
  //       <PokemonInfoLoadingOrError>
  //         <div>Loading...</div>
  //       </PokemonInfoLoadingOrError>
  //     </PokemonLayout>
  //   )
  // if (pokemon.isError) {
  //   return (
  //     <PokemonLayout>
  //       <PokemonInfoLoadingOrError>
  //         <div>Error: {pokemon.error.message}</div>
  //       </PokemonInfoLoadingOrError>
  //     </PokemonLayout>
  //   )
  // }
  // if (species.isError) {
  //   return (
  //     <PokemonLayout>
  //       <PokemonInfoLoadingOrError>
  //         <div>Error: {species.error.message}</div>
  //       </PokemonInfoLoadingOrError>
  //     </PokemonLayout>
  //   )
  // }
  // if (pokemon.data && species.data)
  //   return (
  //     <PokemonLayout>
  //       <PokemonInfo pokemon={pokemon.data}>
  //         <SpeciesInfo {...species.data}></SpeciesInfo>
  //       </PokemonInfo>
  //     </PokemonLayout>
  //   )
  // else
  //   return (
  //     <PokemonLayout>
  //       <PokemonInfoLoadingOrError>
  //         <div>Loading...</div>
  //       </PokemonInfoLoadingOrError>
  //     </PokemonLayout>
  //   )
}
export default ShowPokemon
