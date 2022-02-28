import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IFrontPageProps } from '../interfaces/components'
import { IPokemon, Result } from '../interfaces/pokemon'

export const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

export const PokedexList = (props: IFrontPageProps) => {
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const getPokemon = async (url: string) => {
    return await fetch(url)
      .then((res) => res.json())
      .then((pokemon) => {
        console.log("pokemon fetched")
        return pokemon
      })
  }

  const getAllPokemon = async (url: string) => {
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const result:Result[] = data.results
        return result
      })
      .catch((error) => {
        setLoading(false)
        setError(error)
        return error
      })
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const data: IPokemon[] = []
      const result = await getAllPokemon(apiUrl + '?limit=151')
      console.log(result)
      for (const pokemon of result) {
        const pokemonGet = await getPokemon(pokemon.url)
        data.push(pokemonGet)
      }
      console.log('fetched')
      setLoading(false) 
      props.setPokemonDetails(data)
    }
    fetchData()
  }, [props.pokemonData])

  if (loading) {
    return <div className='mt-20'>Loading...</div>
  } else if (error !== null) {
    return <div className='mt-20'>Error: {error.message}</div>
  } else {
    return (
      <div className='mt-20'>
        <ul className='flex flex-wrap'>
          {props.pokemonDetails.map((pokemon, i) => (
            <Link
              to={`/pokemon/${pokemon.id}`}
              key={pokemon.id}
              className='p-1 flex flex-wrap sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
              <div className=' bg-secondary flex flex-wrap min-w-full rounded-lg overflow-hidden'>
                <div className='flex justify-between min-w-full px-2'>
                  <div>{pokemon.name}</div>
                  <div>ID: {pokemon.id}</div>
                </div>
                <div className='flex min-w-full'>
                  <img src={pokemon.sprites.front_default} />
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}
