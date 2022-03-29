import { lazy, StrictMode, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
// import { PokeDex } from './pages/PokeDex'
// import { ShowPokemon } from './pages/ShowPokemon'
import { Layout } from './components/Layout'
const ShowPokemon = lazy(() => import('./pages/ShowPokemon'))
const PokeDex = lazy(() => import('./pages/PokeDex'))

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
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/' element={<PokeDex />} />
                <Route path='/pokemon/:name' element={<ShowPokemon />} />
                {/* <Route path='/pokemon/id/:id' element={<ShowPokemon />} /> */}
                <Route path='*' element={<div>404</div>}></Route>
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  )
}
