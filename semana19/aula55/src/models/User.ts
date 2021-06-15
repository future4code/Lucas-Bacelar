export enum USER_ROLES {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL',
}

export type User = {
  id: string
  name: string
  email: string
  password: string
  role: USER_ROLES
}

export type UserData = Omit<User, 'id'>

export type UserLogin = Omit<UserData, 'name' | 'role'>

export type DeleteInput = {
  id: string
  token: string
}
