import { Like } from '../../entities/Like'
import { ILikesRepository } from '../../repositories/ILikesRepository'
import { Authentication } from '../../services/Authentication'
import { errorAPI } from '../../services/ErrorAPI'
import { IUnlikePostRequestDTO, IUnlikePostResponseDTO } from './UnlikePostDTO'

export class UnlikePostUseCase {
  constructor(private likesRepository: ILikesRepository) {}
  async execute(data: IUnlikePostRequestDTO): Promise<IUnlikePostResponseDTO> {
    const { token, post_id } = data
    const tokenData = Authentication.getTokenData(token)

    const like = new Like({
      user_id: tokenData.id,
      post_id,
    })

    const isAlreadyUnliked = (await this.likesRepository.find(like))
      ? false
      : true
    if (isAlreadyUnliked) {
      throw errorAPI.badRequest('You already unliked this post')
    }

    await this.likesRepository.unlike(like)

    return { message: 'Success' }
  }
}
