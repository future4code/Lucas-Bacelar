import { Comment } from '../../entities/Comment'
import { ICommentsRepository } from '../../repositories/ICommentsRepository'
import { Authentication } from '../../services/Authentication'
import {
  ICommentPostRequestDTO,
  ICommentPostResponseDTO,
} from './CommentPostDTO'

export class CommentPostUseCase {
  constructor(private commentsRepository: ICommentsRepository) {}
  async execute(
    data: ICommentPostRequestDTO
  ): Promise<ICommentPostResponseDTO> {
    const { token, post_id, description } = data
    const tokenData = Authentication.getTokenData(token)

    const comment = new Comment({
      user_id: tokenData.id,
      post_id,
      description,
    })

    await this.commentsRepository.save(comment)

    return { message: 'Success' }
  }
}
