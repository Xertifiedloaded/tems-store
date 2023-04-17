import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './mainLayout/mainLayout'
import Cart from './pages/cart/cart'
import Landing from './pages/landing/landing'
import Login from './components/login/login'
const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element:<Landing/>,
        },
        {
          path: "/cart",
          element:<Cart/>,
        },
        {
          path: "/login",
          element:<Login/>,
        },
    
      
      ]
    }
  ]
  )
}

export default Routes;