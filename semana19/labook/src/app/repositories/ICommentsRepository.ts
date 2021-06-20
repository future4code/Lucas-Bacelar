import { Comment } from '../entities/Comment'

export interface ICommentsRepository {
  save(comment: Comment): Promise<void>
  find(comment: Comment): Promise<Comment>
}
