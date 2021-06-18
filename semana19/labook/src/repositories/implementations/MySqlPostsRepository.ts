import { Post } from '../../entities/Post'
import { User } from '../../entities/User'
import { DatabaseConnection } from '../connection'
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

  async userFeed(user: User, order?: string): Promise<Array<Post>> {
    const friendshipTable = () =>
      DatabaseConnection.connection('labook_friendship')

    const userIdFriendsQuery = friendshipTable()
      .where({ user_id: user.id })
      .select('friend_id')

    const friendIdFriendsQuery = friendshipTable()
      .where({ friend_id: user.id })
      .select('user_id')

    const result: Array<Post> = await this.postTable()
      .whereIn('author_id', userIdFriendsQuery)
      .orWhereIn('author_id', friendIdFriendsQuery)
      .orWhere('author_id', user.id)
      .orderBy('created_at', order || 'desc')
    return result
  }
}
