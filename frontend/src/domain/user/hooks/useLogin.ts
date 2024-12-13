import { useDispatch } from 'react-redux'
import { LoginBody } from '../types/serviceTypes.ts'
import { login } from '../../../store/appSlice.ts'
import { userService } from '../service/userService.ts'
import { message } from 'antd'
import { setUser } from '../../../store/userSlice.ts'
import { kamanoteUserToken } from '../../../base/constants'

export function useLogin() {
  const dispatch = useDispatch()

  async function handleUserAuth(token: string | undefined, data: any) {
    if (!token) {
      message.error('token is null')
      throw new Error('token is null')
    }
    // 将 token 存储到 localStorage
    localStorage.setItem(kamanoteUserToken, token)
    // 存储用户信息
    dispatch(setUser(data))
    // 设置登录状态
    dispatch(login())
  }

  async function loginHandle(loginBody: LoginBody) {
    const resp = await userService.loginService(loginBody)
    const { token, data } = resp
    await handleUserAuth(token, data)
  }

  async function whoAmIHandle() {
    const resp = await userService.whoamiService()
    const { data, token } = resp
    await handleUserAuth(token, data)
  }

  return {
    loginHandle,
    whoAmIHandle,
  }
}
