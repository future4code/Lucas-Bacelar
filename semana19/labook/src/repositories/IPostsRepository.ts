import { Post } from '../entities/Post'
import { User } from '../entities/User'

export interface IPostsRepository {
  find(id: string): Promise<Post>
  save(user: Post): Promise<void>
  userFeed(user: User, type: string, order?: string): Promise<Array<Post>>
}
