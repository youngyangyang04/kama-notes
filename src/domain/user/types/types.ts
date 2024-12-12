export enum Gender {
  MALE = 1,
  FEMALE = 2,
  OTHER = 3,
}

export enum Banned {
  UNBANNED = 0,
  BANNED = 1,
}

export enum Admin {
  NOT_ADMIN = 0,
  ADMIN = 1,
}

/**
 * 数据库中的用户实体
 */
export interface UserEntity {
  userId: bigint
  account: string
  password: string
  username: string
  gender: Gender
  birthday: string
  avatarUrl: string
  email: string
  school: string
  signature: string
  isBanned: Banned
  isAdmin: Admin
  lastLoginAt: string
  createdAt: string
  updatedAt: string
}

/**
 * Redux 中的用户状态
 */
export type UserState = Omit<
  UserEntity,
  'password' | 'isBanned' | 'createdAt' | 'updatedAt' | 'lastLoginAt'
>
