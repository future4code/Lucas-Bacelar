import { z } from 'zod'
import {
  IAuthenticateUserRequestDTO,
  IAuthenticateUserValidatedDataDTO,
} from './AuthenticateUserDTO'

export class AuthenticateUserValidator {
  validate(
    data: IAuthenticateUserRequestDTO
  ): IAuthenticateUserValidatedDataDTO {
    const userAuth = z.object({
      email: z.string().email({ message: 'Invalid email address.' }),
      password: z
        .string()
        .min(6, { message: 'Must be 6 or more characters long' }),
    })

    return userAuth.parse(data)
  }
}
