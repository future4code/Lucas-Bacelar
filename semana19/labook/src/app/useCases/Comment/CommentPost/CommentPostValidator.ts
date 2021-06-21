import { z } from 'zod'
import {
  ICommentPostRequestDTO,
  ICommentPostValidDataDTO,
} from './CommentPostDTO'

export class CommentPostValidator {
  validate(data: ICommentPostRequestDTO): ICommentPostValidDataDTO {
    const validator = z.object({
      token: z.string(),
      description: z
        .string()
        .min(6, { message: 'Must be 5 or more characters long' }),
      post_id: z.string().uuid(),
    })

    return validator.parse(data)
  }
}
