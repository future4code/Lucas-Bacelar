export enum USER_ROLES {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN',
}

export type User = {
  id: string
  name: string
  email: string
  password: string
  role: USER_ROLES
}
