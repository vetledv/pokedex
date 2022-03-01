import { useDarkMode } from '../../hooks/useDarkMode'
import { ThemeBtn } from './ThemeBtn'

export const Nav = () => {
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <div className='fixed top-0 w-full bg-secondary p-5 flex justify-end'>
      <ThemeBtn colorTheme={colorTheme} setTheme={setTheme}></ThemeBtn>
    </div>
  )
}
