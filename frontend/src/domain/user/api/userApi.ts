import { ApiList } from '../../../request'

// 用户端的 apiList
export const userApiList: ApiList = {
  register: ['POST', '/users'],
  login: ['POST', '/auth/login'],
  logout: ['POST', '/auth/logout'],
  whoami: ['POST', '/auth/whoami'],
  getUser: ['GET', '/users/{userId}'],
  updateMe: ['PATCH', '/users/me'],
  uploadImage: ['POST', '/upload/image'],
}

// 管理端的 apiList
export const adminUserApiList: ApiList = {
  getUserList: ['GET', '/admin/users'],
}
