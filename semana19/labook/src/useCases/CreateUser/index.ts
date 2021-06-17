import { MySqlUsersRepository } from '../../repositories/implementations/MySqlUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const mysqlUsersRepository = new MySqlUsersRepository()

const createUsersUseCase = new CreateUserUseCase(mysqlUsersRepository)

const createUserController = new CreateUserController(createUsersUseCase)

export { createUsersUseCase, createUserController }
