import { createSlice } from '@reduxjs/toolkit'

type AppState = {
  isLogin: boolean // 记录登录状态
  isLoaded: boolean // 记录加载状态
  isAdminApp: boolean // 记录当前是否在管理端下
}

const initialAppState: AppState = {
  isLogin: false,
  isLoaded: false,
  isAdminApp: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    login: (state) => {
      state.isLogin = true
    },
    logout: (state) => {
      state.isLogin = false
    },
    loaded: (state) => {
      state.isLoaded = true
    },
    intoAdminApp: (state) => {
      state.isAdminApp = true
    },
    outAdminApp: (state) => {
      state.isAdminApp = false
    },
  },
})

export const { login, logout, loaded, intoAdminApp, outAdminApp } =
  appSlice.actions
export default appSlice.reducer
