import { useTheme } from '../../hooks/useTheme'
import { SearchPokemon } from './searchbar/SearchPokemon'
import { ThemeBtn } from './ThemeBtn'

export const Nav = () => {
  const [colorTheme, setTheme] = useTheme()

  return (
    <div className='sticky top-0 w-full bg-primary p-5 flex justify-between shadow-md'>
      <SearchPokemon />
      <ThemeBtn colorTheme={colorTheme} setTheme={setTheme} />
    </div>
  )
}
