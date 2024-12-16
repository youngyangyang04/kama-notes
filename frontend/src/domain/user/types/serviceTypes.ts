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

/**
 * 上传图片返回的数据类型
 */
export type UploadImageData = {
  url: string
}

/**
 * 查询用户列表时的参数列表
 */
export type UserListQueryParams = {
  userId?: string
  username?: string
  account?: string
  isAdmin?: number
  isBanned?: number
  page: number
  pageSize: number
}
