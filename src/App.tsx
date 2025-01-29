import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdminLayout, AuthLayout, LandingLayout } from './layouts';
import { AdminUserAnalytics, AdminCrimeAnalytics, LandingPage, LoginPage, SignUpPage } from "./pages";
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
    },
    {
      path: 'admin',
      element: <AdminLayout/>,
      children:[
        {index: true, element: <AdminUserAnalytics/>},
        {path: 'crime', element: <AdminCrimeAnalytics/>}
      ]
    },
    {
      path: '*',
      element: <h1>Error! Page not found.</h1>
    }
  ])
  return (
    <AnimatePresence mode="wait">
    <RouterProvider router={router}/>
    </AnimatePresence>
  )
}

export default App
