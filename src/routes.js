import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layout/mainLayout/mainLayout'
import Landing from './pages/landing/landing'
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
      ]
    }
  ]
  )
}

export default Routes;