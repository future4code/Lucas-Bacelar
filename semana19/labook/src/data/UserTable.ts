import { user } from '../model/UserModel'
import { errorAPI } from '../services/errorAPI'
import { connection } from './connection'

export class UserTable {
  static async createUser(user: user): Promise<void> {
    try {
      await connection('labook_users').insert(user)
    } catch (error) {
      if (error.sqlMessage.includes('Duplicate entry')) {
        throw errorAPI.badRequest('Email already exist')
      } else {
        throw new Error(error.sqlMessage)
      }
    }
  }

  static async getUserByEmail(email: string): Promise<Array<user>> {
    const result: Array<user> = await connection('labook_users').where({
      email,
    })
    return result
  }
}
