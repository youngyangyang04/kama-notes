import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice.ts'
import appReducer from './appSlice.ts'

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
