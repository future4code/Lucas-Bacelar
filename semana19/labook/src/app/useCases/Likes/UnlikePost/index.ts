import { MySqlLikesRepository } from '../../../repositories/implementations/MySqlLikesRepository'
import { UnlikePostController } from './UnlikePostController'
import { UnlikePostUseCase } from './UnlikePostUseCase'
import { UnlikePostValidator } from './UnlikePostValidator'

const mysqlLikesRepository = new MySqlLikesRepository()
const unlikePostValidator = new UnlikePostValidator()

const UnlikePostsUseCase = new UnlikePostUseCase(
  mysqlLikesRepository,
  unlikePostValidator
)

const unlikePostController = new UnlikePostController(UnlikePostsUseCase)

export { UnlikePostsUseCase, unlikePostController }
