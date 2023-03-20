import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layout/mainLayout/mainLayout'
import Landing from './pages/landing/landing'
import Cart from './components/addToCart/cart'
import CartPage from './pages/contact/cartPage'
const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element:<Landing/>,
        },
        {
          path: "/cart",
          element:<CartPage/>,
        },
      
      ]
    }
  ]
  )
}

export default Routes;