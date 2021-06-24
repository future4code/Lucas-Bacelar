import { z } from 'zod'
import { IFindPostRequestDTO, IFindPostValidDataDTO } from './FindPostDTO'

export class FindPostValidator {
  validate(data: IFindPostRequestDTO): IFindPostValidDataDTO {
    const validator = z.object({
      id: z.string().uuid(),
      token: z.string(),
    })

    return validator.parse(data)
  }
}
