import { Like } from '../entities/Like'

export interface ILikesRepository {
  like(like: Like): Promise<void>
  unlike(like: Like): Promise<void>
  find(like: Like): Promise<Like>
}
