import { Post } from '../entities/Post'

export interface IPostsRepository {
  find(id: string): Promise<Post>
  save(user: Post): Promise<void>
}
