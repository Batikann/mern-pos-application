import Bill from '@/pages/Bill'
import Cart from '@/pages/Cart'
import Customers from '@/pages/Customers'
import { Home } from '@/pages/Home'
import HeaderLayout from '@/pages/Layout/HeaderLayout'
import Login from '@/pages/Login'
import Products from '@/pages/Products'
import Register from '@/pages/Register'
import Statistic from '@/pages/Statistic'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/bill',
        element: <Bill />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/statistic',
        element: <Statistic />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])
