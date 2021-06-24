import { z } from 'zod'
import {
  ICreateUserRequestDTO,
  ICreateUserValidatedDataDTO,
} from './CreateUserDTO'

export class CreateUserValidator {
  validate(data: ICreateUserRequestDTO): ICreateUserValidatedDataDTO {
    const validator = z.object({
      name: z.string().min(2, { message: 'Must be 2 or more characters long' }),
      email: z.string().email({ message: 'Invalid email address.' }),
      password: z
        .string()
        .min(6, { message: 'Must be 6 or more characters long' }),
    })

    return validator.parse(data)
  }
}
