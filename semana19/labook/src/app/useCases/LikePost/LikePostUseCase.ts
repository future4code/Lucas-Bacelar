import { Like } from '../../entities/Like'
import { ILikesRepository } from '../../repositories/ILikesRepository'
import { Authentication } from '../../services/Authentication'
import { errorAPI } from '../../services/ErrorAPI'
import { ILikePostRequestDTO, ILikePostResponseDTO } from './LikePostDTO'

export class LikePostUseCase {
  constructor(private likesRepository: ILikesRepository) {}
  async execute(data: ILikePostRequestDTO): Promise<ILikePostResponseDTO> {
    const { token, post_id } = data
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
