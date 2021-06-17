import { MySqlPostsRepository } from '../../repositories/implementations/MySqlPostsRepository'
import { FindPostController } from './FindPostController'
import { FindPostUseCase } from './FindPostUseCase'

const mysqlPostsRepository = new MySqlPostsRepository()

const findPostsUseCase = new FindPostUseCase(mysqlPostsRepository)

const findPostController = new FindPostController(findPostsUseCase)

export { findPostsUseCase, findPostController }
