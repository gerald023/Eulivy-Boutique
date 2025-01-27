import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout, LandingLayout } from './layouts';
import { LandingPage, LoginPage, SignUpPage } from "./pages";
import { AnimatePresence,  } from 'framer-motion';


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
    },
    {
      path: 'auth',
      element: <AuthLayout/>,
      children: [
        {
          index: true,
          // path: 'sign-up',
          element: <SignUpPage/>
        },
        {
          path: 'sign-up',
          element: <SignUpPage/>
        },
        {
          path: 'login',
          element: <LoginPage/>,
        }
      ]
    }
  ])
  return (
    <AnimatePresence mode="wait">
    <RouterProvider router={router}/>
    </AnimatePresence>
  )
}

export default App
