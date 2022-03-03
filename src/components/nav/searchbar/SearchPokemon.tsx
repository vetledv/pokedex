import { createRef, useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { generatePath, useNavigate } from 'react-router-dom'
import { useKeyPress } from '../../../hooks/useKeyPress'
import { Result } from '../../../interfaces/pokemon'
import { apiUrl } from '../../../pages/PokeDex'
import { SuggestionTile } from './SuggestionTile'

export const SearchPokemon = () => {
  const { data } = useQuery('pokemonData', async () => {
    const response = await fetch(apiUrl + '?limit=1126')
    const data = await response.json()
    const result: Result[] = data.results
    return result
  })

  const [inputValue, setInputValue] = useState<string>('') //input value
  const [suggestions, setSuggestions] = useState<Result[]>([]) //suggest pokemon to search for
  const [isVisible, setIsVisible] = useState<boolean>(false) //show/hide search options
  const [selected, setSelected] = useState<Result | undefined>(undefined) //selected search option
  const [selectedIndex, setSelectedIndex] = useState<number>(0) //hovered/arrow navigated item

  const inputRef = createRef<HTMLInputElement>()
  const keyArrowDown = useKeyPress('ArrowDown', inputRef)
  const keyArrowUpPress = useKeyPress('ArrowUp', inputRef)
  const keyPressEnter = useKeyPress('Enter', inputRef)

  const wrapperRef = useRef<HTMLDivElement>(null) //div ref input
  const navigate = useNavigate()
  const path = generatePath('/pokemon/:name', {
    name: inputValue,
  })

  //redirect for suggestionTile onClick
  const handleSuggestionClick = (name: string) => {
    navigate('/pokemon/' + name)
    setIsVisible(false)
    setInputValue('')
  }

  const handleClickOutside = (e: Event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setIsVisible(false)
    }
  }

  //set search options
  useEffect(() => {
    const dataSuggestions: Result[] = []
    if (data) {
      data.forEach((pokemon) => {
        if (
          inputValue.length > 2 &&
          pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
        ) {
          dataSuggestions.push(pokemon)
        }
      })
    }
    setSuggestions(dataSuggestions.slice(0, 7))
  }, [inputValue])

  //show/hide searchOptions
  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  //handle arrow keys navigation
  useEffect(() => {
    if (suggestions.length) {
      if (keyArrowDown) {
        setSelectedIndex((prevState) => {
          if (prevState === suggestions.length - 1) return 0
          else return prevState + 1
        })
      }
      if (keyArrowUpPress) {
        setSelectedIndex((prevState) => {
          if (prevState === 0) return suggestions.length - 1
          else return prevState - 1
        })
      }
    }
  }, [keyArrowDown, keyArrowUpPress])

  //select hovered item
  useEffect(() => {
    if (suggestions.length && selected) {
      setSelectedIndex(suggestions.indexOf(selected))
    }
  }, [selected])

  //fill search input on key enter
  useEffect(() => {
    if (suggestions.length && keyPressEnter) {
      setSelected(suggestions[selectedIndex])
    }
  }, [selectedIndex, keyPressEnter])

  return (
    <div ref={wrapperRef} className='flex justify-self-start justify-center'>
      <div className='flex flex-wrap items-stretch'>
        {/*selected ? selected.name : inputValue*/}
        <input
          ref={inputRef}
          className='px-3 py-1.5 h-10 rounded-lg dark:bg-[#99a1b3] dark:hover:bg-[#7c8291] dark:focus:bg-[#7c8291] placeholder:text-primary text-primary focus:outline-none transition ease-in-out'
          name='pokemon'
          placeholder='Search'
          value={inputValue}
          type='search'
          autoComplete='off'
          onChange={(e) => {
            setSelected(undefined)
            setInputValue(e.target.value)
          }}
          onClick={() => setIsVisible(true)}
          onKeyPress={(e) => {
            if (selected && e.key === 'Enter') {
              handleSuggestionClick(selected.name)
            }
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              inputRef.current?.blur()
            }
          }}
        />
        {isVisible && (
          <ul className='search-list mt-12 dark:bg-[#99a1b3] bg-primary text-primary absolute w-64 rounded-lg'>
            {suggestions
              .filter(({ name }) => name.indexOf(inputValue.toLowerCase()) > -1)
              .map((value, i) => {
                const isSelected: boolean = i === selectedIndex ? true : false
                return (
                  <SuggestionTile
                    key={i}
                    i={i}
                    value={value}
                    isSelected={isSelected}
                    setSelected={setSelected}
                    handleClick={() => handleSuggestionClick(value.name)}
                  />
                )
              })}
          </ul>
        )}
      </div>
      {/* <IconButton
        icon={<SearchIcon />}
        text='Search'
        handleClick={() => {
          if (inputValue !== selected?.name) return
          if (inputValue.length === 0) return
          else navigate(path)
        }}
      /> */}
    </div>
  )
}