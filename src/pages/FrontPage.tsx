import { Nav } from '../components/Nav'
import { PokedexList } from '../components/PokedexList'
import { IFrontPageProps } from '../interfaces/components'

export const FrontPage = ({
  pokemonData,
  setPokemonData,
  pokemonDetails,
  setPokemonDetails,
}: IFrontPageProps) => {
  return (
    <>
      <Nav />
      <PokedexList
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
        pokemonDetails={pokemonDetails}
        setPokemonDetails={setPokemonDetails}
      />
    </>
  )
}
