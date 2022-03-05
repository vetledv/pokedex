import { useDarkMode } from '../../hooks/useDarkMode'
import { SearchPokemon } from './searchbar/SearchPokemon'
import { ThemeBtn } from './ThemeBtn'

export const Nav = () => {
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <div className='sticky top-0 w-full bg-primary p-5 flex justify-between shadow-md'>
      <SearchPokemon />
      <ThemeBtn colorTheme={colorTheme} setTheme={setTheme} />
    </div>
  )
}
