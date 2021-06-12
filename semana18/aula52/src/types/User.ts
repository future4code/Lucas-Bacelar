import { UserRoles } from './Token'

export type User = {
  id: string
  email: string
  password: string
  role: UserRoles
}
