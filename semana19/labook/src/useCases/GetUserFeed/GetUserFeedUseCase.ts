import { IPostsRepository } from '../../repositories/IPostsRepository'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { Authentication } from '../../services/Authentication'
import { errorAPI } from '../../services/ErrorAPI'
import {
  IGetUserFeedRequestDTO,
  IGetUserFeedResponseDTO,
} from './GetUserFeedDTO'

export class GetUserFeedUseCase {
  constructor(
    private postsRepository: IPostsRepository,
    private usersRepository: IUsersRepository
  ) {}
  async execute(
    data: IGetUserFeedRequestDTO
  ): Promise<IGetUserFeedResponseDTO> {
    const tokenData = Authentication.getTokenData(data.token)

    const user = await this.usersRepository.find(tokenData.id)

    if (!user) {
      throw errorAPI.badRequest("This user doesn't exist")
    }

    const posts = await this.postsRepository.userFeed(user, data.type)

    return { message: 'Success', posts }
  }
}
