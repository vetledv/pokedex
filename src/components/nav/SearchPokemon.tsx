import { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { generatePath, useNavigate } from 'react-router-dom'
import { Result } from '../../interfaces/pokemon'
import { apiUrl } from '../../pages/PokeDex'

export const SearchPokemon = () => {
  const [show, setShow] = useState<boolean>(false)
  const [searchOptions, setSearchOptions] = useState<Result[]>([])
  const [value, setValue] = useState<string>('')
  const wrapperRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const path = generatePath('/pokemon/:name', {
    name: value,
  })
  const { data } = useQuery('pokemonData', async () => {
    const response = await fetch(apiUrl + '?limit=1126')
    const data = await response.json()
    const result: Result[] = data.results
    return result
  })

  const handleClickOutside = (event: Event) => {
    const { current: wrap } = wrapperRef
    if (wrap && !wrap.contains(event.target as Node)) {
      setShow(false)
    }
  }
  useEffect(() => {
    const suggestions: Result[] = []
    if (data) {
      data.forEach((pokemon) => {
        if (value.length > 2 && pokemon.name.includes(value)) {
          suggestions.push(pokemon)
        }
      })
    }
    setSearchOptions(suggestions)
  }, [value])

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <div ref={wrapperRef} className='flex justify-self-start'>
      <div>
        <input
          className='border-2 border-gray-300 bg-white text-gray-900 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
          name='pokemon'
          placeholder='Search'
          value={value}
          type='search'
          autoComplete='off'
          onClick={() => setShow(!show)}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          onSubmit={() => navigate(path)}
        />
        {show && (
          <ul className='bg-white border text-gray-900 border-gray-100 mt-2 absolute w-64'>
            {searchOptions
              .filter(({ name }) => name.indexOf(value.toLowerCase()) > -1)
              .map((value, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      navigate('/pokemon/' + value.name)
                      setShow(false)
                      setValue('')
                    }}
                    className='pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900'>
                    {value.name}
                  </li>
                )
              })}
          </ul>
        )}
      </div>

      <button
        className='p-2 ml-2 bg-white rounded-lg text-gray-900'
        type='submit'
        onClick={() => navigate(path)}>
        Search
      </button>
    </div>
  )
}
