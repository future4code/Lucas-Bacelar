import { z } from 'zod'
import { IUnlikePostRequestDTO, IUnlikePostValidDataDTO } from './UnlikePostDTO'

export class UnlikePostValidator {
  validate(data: IUnlikePostRequestDTO): IUnlikePostValidDataDTO {
    const validator = z.object({
      post_id: z.string().uuid(),
      token: z.string(),
    })

    return validator.parse(data)
  }
}
