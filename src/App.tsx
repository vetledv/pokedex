import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IPokemon, Result } from './interfaces/pokemon'
import { FrontPage } from './pages/FrontPage'
import { ShowPokemon } from './pages/ShowPokemon'

export const App = () => {
  const [pokemonData, setPokemonData] = useState<Result[]>([])
  const [pokemonDetails, setPokemonDetails] = useState<IPokemon[]>([])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <FrontPage
              pokemonData={pokemonData}
              setPokemonData={setPokemonData}
              pokemonDetails={pokemonDetails}
              setPokemonDetails={setPokemonDetails}
            />
          }
        />
        <Route path='/pokemon/:id' element={<ShowPokemon />} />
      </Routes>
    </BrowserRouter>
  )
}
