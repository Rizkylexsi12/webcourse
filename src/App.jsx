import { QueryClient, QueryClientProvider } from 'react-query'
import router from './router'
import { RouterProvider } from "react-router-dom"

const queryClient = new QueryClient()

export default function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
};