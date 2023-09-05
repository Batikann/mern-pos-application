import Bill from '@/pages/Bill'
import Cart from '@/pages/Cart'
import { Home } from '@/pages/Home'
import HeaderLayout from '@/pages/Layout/HeaderLayout'
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
    ],
  },
])
