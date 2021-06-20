import { MySqlPostsRepository } from '../../../repositories/implementations/MySqlPostsRepository'
import { FindPostController } from './FindPostController'
import { FindPostUseCase } from './FindPostUseCase'
import { FindPostValidator } from './FindPostValidator'

const mysqlPostsRepository = new MySqlPostsRepository()
const findPostValidator = new FindPostValidator()

const findPostsUseCase = new FindPostUseCase(
  mysqlPostsRepository,
  findPostValidator
)

const findPostController = new FindPostController(findPostsUseCase)

export { findPostsUseCase, findPostController }
