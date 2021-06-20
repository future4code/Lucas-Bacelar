import { DatabaseConnection } from '../../../database/DatabaseConnection'
import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

export class MySqlUsersRepository
  extends DatabaseConnection
  implements IUsersRepository
{
  private userTable = () => DatabaseConnection.connection('labook_users')
  constructor() {
    super()
  }

  async find(id: string): Promise<User> {
    const result: Array<User> = await this.userTable().where({
      id,
    })
    return result[0]
  }

  async findByEmail(email: string): Promise<User> {
    const result: Array<User> = await this.userTable().where({
      email,
    })
    return result[0]
  }

  async save(user: User): Promise<void> {
    await this.userTable().insert(user)
  }
}
