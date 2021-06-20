+import { z } from 'zod'
import { ICreateUserRequestDTO, ICreateUserValidatedDataDTO } from "./CreateUserDTO"

export class CreateUserValidator {
  validate(
    data: ICreateUserRequestDTO
  ): ICreateUserValidatedDataDTO {
    const creationData = z.object({
      name: z.string().min(2),
      email: z.string().email({ message: 'Invalid email address.' }),
      password: z
        .string()
        .min(6, { message: 'Must be 6 or more characters long' }),
    })

    return creationData.parse(data)
  }
}
