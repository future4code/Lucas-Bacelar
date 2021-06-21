import { z } from 'zod'
import {
  IUnmakeFriendshipRequestDTO,
  IUnmakeFriendshipValidDataDTO,
} from './UnmakeFriendshipDTO'

export class UnmakeFriendshipValidator {
  validate(data: IUnmakeFriendshipRequestDTO): IUnmakeFriendshipValidDataDTO {
    const validator = z.object({
      token: z.string(),
      friend_id: z.string().uuid(),
    })

    return validator.parse(data)
  }
}
