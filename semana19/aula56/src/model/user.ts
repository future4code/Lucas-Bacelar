export enum USER_ROLES {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN',
}

export type authenticationData = {
  id: string
  role: USER_ROLES
}

export type userOutputDto = {
  id: string
  name: string
  nickname: string
  email: string
  password: string
  role: USER_ROLES
}

export type signupInputDto = {
  name: any
  nickname: any
  email: any
  password: any
  role: any
}

export type loginInputDto = {
  email: any
  password: any
}

export type insertUserDto = {
  id: string
  name: string
  nickname: string
  email: string
  password: string
  role: USER_ROLES
}
