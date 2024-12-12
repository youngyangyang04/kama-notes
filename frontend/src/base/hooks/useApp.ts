import { useSelector } from 'react-redux'
import { RootState } from '../../store/store.ts'

/**
 * 获取全局的应用状态
 * 可用于下面操作：
 *
 * 1. 判断当前页面处于用户端还是管理端
 */
export function useApp() {
  return useSelector((state: RootState) => state.app)
}
