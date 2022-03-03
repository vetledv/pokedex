import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { PokedexTile } from '../components/PokedexTile'
import { IData } from '../interfaces/pokemon'

export const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

export const PokeDex = () => {
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
  if (query.isFetched && query.data !== undefined) {
    return (
      <div className='flex flex-col'>
        <div className='flex flex-wrap justify-center'>
          {query.data.pages.map((data, i) => (
            <React.Fragment key={i}>
              {data.results.map((pokemon) => (
                <PokedexTile key={pokemon.name} {...pokemon}></PokedexTile>
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className='flex justify-center p-1 mb-8'>
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
    )
  } else {
    return <div></div>
  }
}
