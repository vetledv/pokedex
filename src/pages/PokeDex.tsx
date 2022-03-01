import { useQuery, UseQueryResult } from 'react-query'
import { PokedexTile } from '../components/PokedexTile'
import { Result } from '../interfaces/pokemon'

export const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

export const PokeDex = () => {
  const query = useQuery('pokemonData', async () => {
    const response = await fetch(apiUrl + '?limit=151')
    const data = await response.json()
    const result: Result[] = data.results
    return result
  })
  if (query.isLoading) {
    return <div>Loading...</div>
  }
  if (query.error) {
    return <div>Error: {query.error}</div>
  }
  if (query.isFetched && query.data !== undefined) {
    return (
      <ul className='flex flex-wrap'>
        {query.data.slice(0, 151).map((pokemon, i) => (
          <PokedexTile key={pokemon.name} {...pokemon}></PokedexTile>
        ))}
      </ul>
    )
  } else {
    return <div></div>
  }
}
