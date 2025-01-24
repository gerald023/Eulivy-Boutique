import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingLayout } from './layouts';
import { LandingPage } from "./pages";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingLayout/>,
      children: [
        {
          index: true,
          element: <LandingPage/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
