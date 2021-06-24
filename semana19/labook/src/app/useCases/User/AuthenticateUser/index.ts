import { MySqlUsersRepository } from '../../../repositories/implementations/MySqlUsersRepository'
import { AuthenticateUserController } from './AuthenticateUserController'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'
import { AuthenticateUserValidator } from './AuthenticateUserValidator'

const mysqlUsersRepository = new MySqlUsersRepository()
const authenticateUserValidator = new AuthenticateUserValidator()

const authenticateUsersUseCase = new AuthenticateUserUseCase(
  mysqlUsersRepository,
  authenticateUserValidator
)

const authenticateUserController = new AuthenticateUserController(
  authenticateUsersUseCase
)

export { authenticateUsersUseCase, authenticateUserController }
