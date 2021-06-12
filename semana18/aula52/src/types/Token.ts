export enum UserRoles {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN',
}

export type AuthenticationData = {
  id: string
  role: UserRoles
}
