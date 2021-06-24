import { MySqlUsersRepository } from '../../../repositories/implementations/MySqlUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserValidator } from './CreateUserValidator'

const mysqlUsersRepository = new MySqlUsersRepository()
const createUserValidator = new CreateUserValidator()

const createUsersUseCase = new CreateUserUseCase(
  mysqlUsersRepository,
  createUserValidator
)

const createUserController = new CreateUserController(createUsersUseCase)

export { createUsersUseCase, createUserController }
