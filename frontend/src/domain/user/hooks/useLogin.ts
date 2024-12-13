import { useDispatch } from 'react-redux'
import { LoginBody } from '../types/serviceTypes.ts'
import { login } from '../../../store/appSlice.ts'
import { userService } from '../service/userService.ts'
import { message } from 'antd'
import { setUser } from '../../../store/userSlice.ts'

export function useLogin() {
  const dispatch = useDispatch()

  async function loginHandle(loginBody: LoginBody) {
    const resp = await userService.loginService(loginBody)
    const { token, data } = resp

    if (!token) {
      message.error('token is null')
      throw new Error('token is null')
    }
    // 将 token 存储到 localStorage
    localStorage.setItem('kamanoteUserToken', token)
    // 存储用户信息
    dispatch(setUser(data))
    // 设置登录状态
    dispatch(login())
  }

  return {
    loginHandle,
  }
}
