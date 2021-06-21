import { Friendship } from '../../../entities/Friendship'
import { IFriendshipsRepository } from '../../../repositories/IFriendshipsRepository'
import { Authentication } from '../../../services/Authentication'
import { errorAPI } from '../../../services/ErrorAPI'
import {
  IMakeFriendshipRequestDTO,
  IMakeFriendshipResponseDTO,
} from './MakeFriendshipDTO'
import { MakeFriendshipValidator } from './MakeFriendshipValidator'

export class MakeFriendshipUseCase {
  constructor(
    private friendshipsRepository: IFriendshipsRepository,
    private validator: MakeFriendshipValidator
  ) {}
  async execute(
    data: IMakeFriendshipRequestDTO
  ): Promise<IMakeFriendshipResponseDTO> {
    const { token, friend_id } = this.validator.validate(data)
    const tokenData = Authentication.getTokenData(token)

    const friendship = new Friendship({
      user_id: tokenData.id,
      friend_id,
    })

    const isAlreadyFriend = await this.friendshipsRepository.find(friendship)
    if (isAlreadyFriend) {
      throw errorAPI.badRequest('You are already this user friend')
    }

    await this.friendshipsRepository.befriend(friendship)

    return { message: 'Success' }
  }
}
