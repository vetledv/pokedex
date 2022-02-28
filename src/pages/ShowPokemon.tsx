import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { apiUrl } from '../components/PokedexList'
import { PokemonInfo } from '../components/PokemonInfo'
import { IPokemon, Type } from '../interfaces/pokemon'

export const ShowPokemon = () => {
  const [pokemonData, setPokemonData] = useState<IPokemon>()
  const [loading, setLoading] = useState<boolean>(true)

  let pokemonID = useParams()
  const fetchPokemonInfo = async () => {
    return await fetch(apiUrl + '/' + pokemonID.id)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data)
      })
  }
  useEffect(() => {
    const fetchData = async () => {
      await fetchPokemonInfo()
    }
    fetchData()
  }, [pokemonID])
  if (pokemonData !== undefined) {
    let pokemonTypes: Type[] = []
    for (let i = 0; i < pokemonData.types.length; i++) {
      pokemonTypes.push(pokemonData.types[i])
    }
    return (
      <>
        <Nav />
        <div className='mt-20'></div>
        <PokemonInfo pokemonData={pokemonData} pokemonTypes={pokemonTypes} />
      </>
    )
  } else
    return (
      <>
        <Nav />
        <div className='mt-20'></div>
        <Link to={'/'}>
          <div className='p-2 bg-orange-400 w-16'>Back</div>
        </Link>
        <div>Loading...</div>
      </>
    )
}
