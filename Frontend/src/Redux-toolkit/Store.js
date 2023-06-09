import { configureStore } from '@reduxjs/toolkit'
import { cartSlicevalue } from './Slices/CartSlice'
import { userSlicevalue } from './Slices/UserSlice'

export const store = configureStore({
  reducer: {
    Cart: cartSlicevalue,
    User: userSlicevalue,
  },
})