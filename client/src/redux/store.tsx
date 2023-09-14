import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice'
import { useDispatch } from 'react-redux'
// ...
const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
