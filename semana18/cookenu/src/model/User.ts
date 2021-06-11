import connection from '../connection'
import { User } from '../types/User'

const usersTable = () => connection('Cookenu_Users')

export class UserTable {
  constructor() {}

  static async create(user: User): Promise<void> {
    await usersTable().insert(user)
  }

  static async searchByEmail(email: string): Promise<User | null> {
    const result = await usersTable().where('email', email)
    return result[0]
  }
}
