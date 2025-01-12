import router from './router'
import { RouterProvider } from "react-router-dom"

export default function App() {
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
};