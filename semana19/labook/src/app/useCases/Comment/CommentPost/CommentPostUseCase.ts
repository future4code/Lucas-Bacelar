import { Comment } from '../../../entities/Comment'
import { ICommentsRepository } from '../../../repositories/ICommentsRepository'
import { Authentication } from '../../../services/Authentication'
import {
  ICommentPostRequestDTO,
  ICommentPostResponseDTO,
} from './CommentPostDTO'
import { CommentPostValidator } from './CommentPostValidator'

export class CommentPostUseCase {
  constructor(
    private commentsRepository: ICommentsRepository,
    private validator: CommentPostValidator
  ) {}
  async execute(
    data: ICommentPostRequestDTO
  ): Promise<ICommentPostResponseDTO> {
    const { token, post_id, description } = this.validator.validate(data)
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
