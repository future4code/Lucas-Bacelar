import { z } from 'zod'
import { ILikePostRequestDTO, ILikePostValidDataDTO } from './LikePostDTO'

export class LikePostValidator {
  validate(data: ILikePostRequestDTO): ILikePostValidDataDTO {
    const validator = z.object({
      post_id: z.string().uuid(),
      token: z.string(),
    })

    return validator.parse(data)
  }
}
