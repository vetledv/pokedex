import { ILayout } from '../interfaces/components'
import { Nav } from './nav/Nav'

export const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Nav />
      <div className='mt-24'>
        <main>{children}</main>
      </div>
    </>
  )
}
