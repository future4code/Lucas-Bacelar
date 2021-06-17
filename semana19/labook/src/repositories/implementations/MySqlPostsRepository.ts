import { Post } from '../../entities/Post'
import { DatabaseConnection } from '../connection'
import { IPostsRepository } from '../IPostsRepository'

export class MySqlPostsRepository
  extends DatabaseConnection
  implements IPostsRepository
{
  private postTable = DatabaseConnection.connection('labook_posts')
  constructor() {
    super()
  }

  async find(id: string): Promise<Post> {
    const result: Array<Post> = await this.postTable.where({
      id,
    })
    return result[0]
  }

  async save(post: Post): Promise<void> {
    await this.postTable.insert(post)
  }
}
