import { Dispatch, SetStateAction } from 'react'
import { Result } from './pokemon'

export type themeState = 'dark' | 'light'
export type setThemeState = Dispatch<SetStateAction<themeState>>

export interface IThemeBtn {
  colorTheme: themeState
  setTheme: setThemeState
}

export interface IIconButton {
  icon: JSX.Element
  text: string
  handleClick?: Function
}

export interface ILayout {
  children?: React.ReactNode
}

export type pokemonParams = { id?: string; name?: string }

export interface ISuggestionTile {
  value: Result
  i: number
  handleClick: Function
  isSelected: boolean
  setSelected: Dispatch<SetStateAction<Result | undefined>>
}
