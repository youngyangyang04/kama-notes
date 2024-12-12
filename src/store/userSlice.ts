import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { UserState } from '../domain/user'
import { Gender, Admin } from '../domain/user'

const initialUserState: UserState = {
  userId: 0n,
  username: '',
  account: '',
  email: '',
  avatarUrl: '',
  gender: Gender.OTHER,
  school: '',
  signature: '',
  birthday: '',
  isAdmin: Admin.NOT_ADMIN,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (_, action: PayloadAction<UserState>) => {
      return action.payload
    },
    resetUser: () => {
      return initialUserState
    },
  },
})

export const { setUser, resetUser } = userSlice.actions
export default userSlice.reducer
