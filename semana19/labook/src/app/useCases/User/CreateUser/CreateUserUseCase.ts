import { User } from '../../../entities/User'
import { IUsersRepository } from '../../../repositories/IUsersRepository'
import { Authentication } from '../../../services/Authentication'
import { errorAPI } from '../../../services/ErrorAPI'
import { HashManager } from '../../../services/HashManager'
import { ICreateUserRequestDTO, ICreateUserResponseDTO } from './CreateUserDTO'
import { CreateUserValidator } from './CreateUserValidator'

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private validator: CreateUserValidator
  ) {}
  async execute(data: ICreateUserRequestDTO): Promise<ICreateUserResponseDTO> {
    const validData = this.validator.validate(data)
    const emailAlreadyExist = await this.usersRepository.findByEmail(
      validData.email
    )

    if (emailAlreadyExist) {
      throw errorAPI.badRequest('Email already used')
    }

    const user = new User({
      ...validData,
      password: await HashManager.hash(validData.password),
    })

    await this.usersRepository.save(user)

    const token = Authentication.generateToken({ id: user.id })

    return { token, message: 'Success' }
  }
}
