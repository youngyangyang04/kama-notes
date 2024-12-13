/**
 * 注册请求参数和返回参数
 */
export type RegisterBody = {
  username: string
  account: string
  password: string
}

export type RegisterData = {
  userId: string
}

/**
 * 登录时的请求参数和返回参数
 */
export type LoginBody = {
  account: string
  password: string
}
