import { DatabaseConnection } from '../../../database/DatabaseConnection'
import { Like } from '../../entities/Like'
import { ILikesRepository } from '../ILikesRepository'

export class MySqlLikesRepository
  extends DatabaseConnection
  implements ILikesRepository
{
  private likesTable = () => DatabaseConnection.connection('labook_likes')
  constructor() {
    super()
  }

  async find(like: Like): Promise<Like> {
    const result: Array<Like> = await this.likesTable().where(like)
    return result[0]
  }

  async like(like: Like): Promise<void> {
    await this.likesTable().insert(like)
  }

  async unlike(like: Like): Promise<void> {
    await this.likesTable().delete().where(like)
  }
}
