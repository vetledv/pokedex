import { useQuery } from 'react-query'
import { PokedexTile } from '../components/PokedexTile'
import { Result } from '../interfaces/pokemon'

export const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

export const PokeDex = () => {
  const { isLoading, error, data, isFetched } = useQuery(
    'pokemonData',
    async () => {
      const response = await fetch(apiUrl + '?limit=151')
      const data = await response.json()
      const result: Result[] = data.results
      return result
    }
  )

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }
  if (isFetched && data !== undefined) {
    return (
      <ul className='flex flex-wrap'>
        {data.map((pokemon, i) => (
          <PokedexTile key={pokemon.name} {...pokemon}></PokedexTile>
        ))}
      </ul>
    )
  } else return <div className='mt-20'>poop</div>
}
