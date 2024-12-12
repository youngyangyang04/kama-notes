import { useDispatch } from 'react-redux'
import { resetUser } from '../../../store/userSlice.ts'
import { logout } from '../../../store/appSlice.ts'

export function useLogout() {
  const dispatch = useDispatch()
  return () => {
    // 清空 redux-user 中的用户信息
    dispatch(resetUser())
    // 将 redux-app 中的 isLogin 状态设置为 false
    dispatch(logout())
  }
}
