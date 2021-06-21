import { Friendship } from '../../../entities/Friendship'
import { IFriendshipsRepository } from '../../../repositories/IFriendshipsRepository'
import { Authentication } from '../../../services/Authentication'
import { errorAPI } from '../../../services/ErrorAPI'
import {
  IUnmakeFriendshipRequestDTO,
  IUnmakeFriendshipResponseDTO,
} from './UnmakeFriendshipDTO'
import { UnmakeFriendshipValidator } from './UnmakeFriendshipValidator'

export class UnmakeFriendshipUseCase {
  constructor(
    private friendshipsRepository: IFriendshipsRepository,
    private validator: UnmakeFriendshipValidator
  ) {}
  async execute(
    data: IUnmakeFriendshipRequestDTO
  ): Promise<IUnmakeFriendshipResponseDTO> {
    const { token, friend_id } = this.validator.validate(data)
    const tokenData = Authentication.getTokenData(token)

    const friendship = new Friendship({
      user_id: tokenData.id,
      friend_id,
    })

    const isNotFriend = (await this.friendshipsRepository.find(friendship))
      ? false
      : true
    if (isNotFriend) {
      throw errorAPI.badRequest("You aren't this user friend")
    }

    await this.friendshipsRepository.unfriend(friendship)

    return { message: 'Success' }
  }
}
