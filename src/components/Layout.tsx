import React, { ReactChildren, ReactText } from 'react'
import { Nav } from './nav/Nav'

interface ILayout {
  children?: React.ReactNode
}
export const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Nav />
      <div className='mt-20'>
        <main>{children}</main>
      </div>
    </>
  )
}
