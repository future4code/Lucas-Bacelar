import { DatabaseConnection } from '../../../database/DatabaseConnection'
import { Post } from '../../entities/Post'
import { User } from '../../entities/User'
import { IPostsRepository } from '../IPostsRepository'

export class MySqlPostsRepository
  extends DatabaseConnection
  implements IPostsRepository
{
  private postTable = () => DatabaseConnection.connection('labook_posts')
  constructor() {
    super()
  }

  async find(id: string): Promise<Post> {
    const result: Array<Post> = await this.postTable().where({
      id,
    })
    return result[0]
  }

  async save(post: Post): Promise<void> {
    await this.postTable().insert(post)
  }

  async userFeed(user: User, type: string, page: number): Promise<Array<Post>> {
    const offset = 5
    const friendshipTable = () =>
      DatabaseConnection.connection('labook_friendship')

    const userIdFriendsQuery = friendshipTable()
      .where({ user_id: user.id })
      .select('friend_id')

    const friendIdFriendsQuery = friendshipTable()
      .where({ friend_id: user.id })
      .select('user_id')

    const result: Array<Post> = await this.postTable()
      .where('type', type)
      .whereIn('author_id', userIdFriendsQuery)
      .orWhereIn('author_id', friendIdFriendsQuery)
      .limit(offset)
      .offset(offset * (page - 1))
      .orderBy('created_at', 'desc')

    return result
  }
}
