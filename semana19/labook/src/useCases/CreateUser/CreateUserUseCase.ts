import { User } from '../../entities/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { Authentication } from '../../services/Authentication'
import { errorAPI } from '../../services/ErrorAPI'
import { HashManager } from '../../services/HashManager'
import { ICreateUserRequestDTO, ICreateUserResponseDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(data: ICreateUserRequestDTO): Promise<ICreateUserResponseDTO> {
    const userAlreadyExist = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExist) {
      throw errorAPI.badRequest('User already exist')
    }

    const user = new User({
      ...data,
      password: await HashManager.hash(data.password),
    })

    await this.usersRepository.save(user)

    const token = Authentication.generateToken({ id: user.id })

    return { token, message: 'Success' }
  }
}
