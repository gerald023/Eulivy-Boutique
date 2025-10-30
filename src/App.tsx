import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdminLayout, AuthLayout, LandingLayout } from './layouts';
import { AdminUserAnalytics, AdminCrimeAnalytics, LandingPage, LoginPage, SignUpPage } from "./pages";
import { AnimatePresence,  } from 'framer-motion';
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { AddProduct, ViewAllProducts } from "./pages/dashboard/admin/pages";

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
      element: 
        <ProtectedRoute>
          <AdminLayout/>
        </ProtectedRoute>,
      children:[
        {index: true, element: <AdminUserAnalytics/>},
        {path: 'crime', element: <AdminCrimeAnalytics/>},
        {path: 'add-product', element: <AddProduct/>},
        {path: 'all-products', element: <ViewAllProducts/>},
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
