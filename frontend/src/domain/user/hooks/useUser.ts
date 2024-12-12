import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store.ts'

export function useUser() {
  return useSelector((state: RootState) => state.user)
}
