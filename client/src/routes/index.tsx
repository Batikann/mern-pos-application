import Bill from '@/pages/Bill'
import Cart from '@/pages/Cart'
import Customers from '@/pages/Customers'
import { Home } from '@/pages/Home'
import HeaderLayout from '@/pages/Layout/HeaderLayout'
import Login from '@/pages/Login'
import Products from '@/pages/Products'
import Register from '@/pages/Register'
import Statistic from '@/pages/Statistic'
import { Navigate, createBrowserRouter } from 'react-router-dom'
export const RouteControl = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  } else {
    return <Navigate to="/login" />
  }
}
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      {
        index: true,
        element: (
          <RouteControl>
            <Home />
          </RouteControl>
        ),
      },
      {
        path: '/cart',
        element: (
          <RouteControl>
            <Cart />
          </RouteControl>
        ),
      },
      {
        path: '/bill',
        element: (
          <RouteControl>
            <Bill />
          </RouteControl>
        ),
      },
      {
        path: '/customers',
        element: (
          <RouteControl>
            <Customers />
          </RouteControl>
        ),
      },
      {
        path: '/statistic',
        element: (
          <RouteControl>
            <Statistic />
          </RouteControl>
        ),
      },
      {
        path: '/products',
        element: (
          <RouteControl>
            <Products />
          </RouteControl>
        ),
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
