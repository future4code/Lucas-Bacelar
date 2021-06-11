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

  static async searchById(id: string): Promise<User | null> {
    const result = await usersTable().where('id', id)
    return result[0]
  }

  static async userNotExist(id: string) {
    const result = await UserTable.searchById(id)
    if (!result) {
      return true
    }
    return false
  }
}
