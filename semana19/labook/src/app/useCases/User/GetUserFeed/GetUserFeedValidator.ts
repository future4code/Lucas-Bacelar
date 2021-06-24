import { z } from 'zod'
import { errorAPI } from '../../../services/APIError'
import { POST_TYPES } from '../../../types/Post'
import { IGetUserFeedRequestDTO, IGetUserValidDataDTO } from './GetUserFeedDTO'

export class GetUserFeedValidator {
  validate(data: IGetUserFeedRequestDTO): IGetUserValidDataDTO {
    if (isNaN(Number(data.page))) {
      throw errorAPI.wrongParams('Page must be a number')
    }

    data.page = Number(data.page)

    const validator = z.object({
      type: z.nativeEnum(POST_TYPES),
      page: z.number().int().positive(),
      token: z.string(),
    })

    return validator.parse(data)
  }
}
