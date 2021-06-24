import { DatabaseConnection } from '../../../database/DatabaseConnection'
import { Comment } from '../../entities/Comment'
import { ICommentsRepository } from '../ICommentsRepository'

export class MySqlCommentsRepository
  extends DatabaseConnection
  implements ICommentsRepository
{
  private commentsTable = () => DatabaseConnection.connection('labook_comments')
  constructor() {
    super()
  }

  async find(comment: Comment): Promise<Comment> {
    const result: Array<Comment> = await this.commentsTable().where(comment)
    return result[0]
  }

  async save(comment: Comment): Promise<void> {
    await this.commentsTable().insert(comment)
  }
}
