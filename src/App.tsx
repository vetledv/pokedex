import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShowPokemon } from './pages/ShowPokemon'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { PokeDex } from './pages/PokeDex'
import { Layout } from './components/Layout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      keepPreviousData: true,
    },
  },
})

export const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<PokeDex />} />
              <Route path='/pokemon/:name' element={<ShowPokemon />} />
              <Route path='/pokemon/:id' element={<ShowPokemon />} />
              <Route path='*' element={<div>404</div>}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  )
}
