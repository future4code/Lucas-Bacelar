import { Like } from '../../../entities/Like'
import { ILikesRepository } from '../../../repositories/ILikesRepository'
import { errorAPI } from '../../../services/APIError'
import { Authentication } from '../../../services/Authentication'
import { ILikePostRequestDTO, ILikePostResponseDTO } from './LikePostDTO'
import { LikePostValidator } from './LikePostValidator'

export class LikePostUseCase {
  constructor(
    private likesRepository: ILikesRepository,
    private validator: LikePostValidator
  ) {}
  async execute(data: ILikePostRequestDTO): Promise<ILikePostResponseDTO> {
    const { token, post_id } = this.validator.validate(data)
    const tokenData = Authentication.getTokenData(token)

    const like = new Like({
      user_id: tokenData.id,
      post_id,
    })

    const isAlreadyLiked = await this.likesRepository.find(like)
    if (isAlreadyLiked) {
      throw errorAPI.badRequest('You already liked this post')
    }

    await this.likesRepository.like(like)

    return { message: 'Success' }
  }
}
