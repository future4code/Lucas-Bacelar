import { z } from 'zod'
import { POST_TYPES } from '../../../types/Post'
import {
  ICreatePostRequestDTO,
  ICreatePostValidatedDataDTO,
} from './CreatePostDTO'

export class CreatePostValidator {
  validate(data: ICreatePostRequestDTO): ICreatePostValidatedDataDTO {
    const validator = z.object({
      photo: z.string().url({ message: 'Invalid url' }),
      description: z
        .string()
        .min(5, { message: 'Must be 5 or more characters long' }),
      type: z.nativeEnum(POST_TYPES),
      token: z.string(),
    })

    return validator.parse(data)
  }
}
