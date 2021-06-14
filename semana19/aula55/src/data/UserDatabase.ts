import { User } from '../models/User'
import { connection } from './MainDatabase'

export default class UserDB {
  static async signup(user: User) {
    try {
      await connection('User_Arq').insert(user)
    } catch (err) {
      if (err.sqlMessage.includes('Duplicate entry')) {
        throw new Error('Usuário já existe')
      } else {
        throw new Error('Falha inesperada no banco de dados')
      }
    }
  }

  static async searchByEmail(email: string): Promise<User> {
    try {
      const result = await connection('User_Arq').where('email', email)
      if (!result[0]) {
        throw new Error('Usuário não encontrado')
      }
      return result[0]
    } catch (err) {
      throw new Error('Falha inesperada no banco de dados')
    }
  }
}
