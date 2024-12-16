import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store.ts'

// 返回 Redux 中的个人信息
export function useUser() {
  return useSelector((state: RootState) => state.user)
}
