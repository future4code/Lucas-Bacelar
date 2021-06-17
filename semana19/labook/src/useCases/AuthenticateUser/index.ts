import { MySqlUsersRepository } from '../../repositories/implementations/MySqlUsersRepository'
import { AuthenticateUserController } from './AuthenticateUserController'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

const mysqlUsersRepository = new MySqlUsersRepository()

const authenticateUsersUseCase = new AuthenticateUserUseCase(
  mysqlUsersRepository
)

const authenticateUserController = new AuthenticateUserController(
  authenticateUsersUseCase
)

export { authenticateUsersUseCase, authenticateUserController }
