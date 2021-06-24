import { IPostsRepository } from '../../../repositories/IPostsRepository'
import { IUsersRepository } from '../../../repositories/IUsersRepository'
import { errorAPI } from '../../../services/APIError'
import { Authentication } from '../../../services/Authentication'
import {
  IGetUserFeedRequestDTO,
  IGetUserFeedResponseDTO,
} from './GetUserFeedDTO'
import { GetUserFeedValidator } from './GetUserFeedValidator'

export class GetUserFeedUseCase {
  constructor(
    private postsRepository: IPostsRepository,
    private usersRepository: IUsersRepository,
    private validator: GetUserFeedValidator
  ) {}
  async execute(
    data: IGetUserFeedRequestDTO
  ): Promise<IGetUserFeedResponseDTO> {
    const { token, type, page } = this.validator.validate(data)
    const tokenData = Authentication.getTokenData(token)

    const user = await this.usersRepository.find(tokenData.id)

    if (!user) {
      throw errorAPI.unauthorized('Unauthorized')
    }

    const posts = await this.postsRepository.userFeed(user, type, page)

    return { message: 'Success', posts }
  }
}
