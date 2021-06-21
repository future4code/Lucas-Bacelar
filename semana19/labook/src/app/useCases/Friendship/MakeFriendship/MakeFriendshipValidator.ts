import { z } from 'zod'
import {
  IMakeFriendshipRequestDTO,
  IMakeFriendshipValidDataDTO,
} from './MakeFriendshipDTO'

export class MakeFriendshipValidator {
  validate(data: IMakeFriendshipRequestDTO): IMakeFriendshipValidDataDTO {
    const validator = z.object({
      token: z.string(),
      friend_id: z.string().uuid(),
    })

    return validator.parse(data)
  }
}
