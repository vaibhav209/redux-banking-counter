import { configureStore } from '@reduxjs/toolkit'
import amountReducer from "./reducers/amountSlice";


export const store = configureStore({
  reducer: {
    amountReducer,
  },
})