import { ILayout } from '../interfaces/components'
import { Nav } from './nav/Nav'

export const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Nav />
      <main className='p-6'>{children}</main>
    </>
  )
}
