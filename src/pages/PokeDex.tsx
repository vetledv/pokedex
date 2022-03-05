import { useInfiniteQuery } from 'react-query'
import { PokedexTile } from '../components/PokedexTile'
import { IData } from '../interfaces/pokemon'

export const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

const PokeDex = () => {
  const fetchData = async ({ pageParam = apiUrl }) => {
    const response = await fetch(pageParam)
    const data: IData = await response.json()
    return data
  }
  const query = useInfiniteQuery<IData, Error>('pokeDexData', fetchData, {
    getNextPageParam: (lastPage, pages) => lastPage.next,
  })

  if (query.isLoading) {
    return <div>Loading...</div>
  }
  if (query.error) {
    return <div>Error: {query.error}</div>
  }
  if (query.isFetched && query.data) {
    return (
      <div className='flex justify-center'>
        <div className='flex flex-col max-w-5xl sm:w-full gap-2'>
          <div className='flex flex-wrap justify-center gap-2 w-full'>
            {query.data.pages.map((data, i) =>
              data.results.map((pokemon, i) => (
                <PokedexTile key={pokemon.name} {...pokemon}></PokedexTile>
              ))
            )}
          </div>
          <div className='flex justify-center'>
            <button
              className='p-4 bg-secondary rounded-lg'
              disabled={!query.hasNextPage || query.isFetchingNextPage}
              onClick={() => {
                query.fetchNextPage()
              }}>
              {query.isFetchingNextPage ? 'Loading' : 'Load More'}
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}
export default PokeDex
