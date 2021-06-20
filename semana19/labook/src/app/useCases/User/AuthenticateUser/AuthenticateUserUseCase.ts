import { User } from '../../../entities/User'
import { IUsersRepository } from '../../../repositories/IUsersRepository'
import { Authentication } from '../../../services/Authentication'
import { errorAPI } from '../../../services/ErrorAPI'
import { HashManager } from '../../../services/HashManager'
import {
  IAuthenticateUserRequestDTO,
  IAuthenticateUserResponseDTO,
} from './AuthenticateUserDTO'
import { AuthenticateUserValidator } from './AuthenticateUserValidator'

export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private validator: AuthenticateUserValidator
  ) {}
  async execute(
    data: IAuthenticateUserRequestDTO
  ): Promise<IAuthenticateUserResponseDTO> {
    const validData = this.validator.validate(data)

    const userExist = await this.usersRepository.findByEmail(validData.email)

    if (!userExist) {
      throw errorAPI.notFound("User doesn't exist")
    }

    const passwordIsCorrect = await HashManager.compare(
      validData.password,
      userExist.password
    )

    if (!passwordIsCorrect) {
      throw errorAPI.wrongParams('Incorrect password')
    }

    const user = new User(userExist, userExist.id)

    const token = Authentication.generateToken({ id: user.id })

    return { token, message: 'Success' }
  }
}
