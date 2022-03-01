import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FrontPage } from './pages/FrontPage'
import { ShowPokemon } from './pages/ShowPokemon'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

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
          <Routes>
            <Route path='/' element={<FrontPage />} />
            <Route path='/pokemon/:id' element={<ShowPokemon />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  )
}
