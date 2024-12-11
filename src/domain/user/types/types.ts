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

export interface User {
  userId: bigint
  account: string
  username: string
  gender: Gender
  birthday: string
  avatarUrl: string
  email: string
  school: string
  signature: string
  isBanned: Banned
  isAdmin: Admin
}
