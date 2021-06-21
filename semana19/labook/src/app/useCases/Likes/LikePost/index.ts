import { MySqlLikesRepository } from '../../../repositories/implementations/MySqlLikesRepository'
import { LikePostController } from './LikePostController'
import { LikePostUseCase } from './LikePostUseCase'
import { LikePostValidator } from './LikePostValidator'

const mysqlLikesRepository = new MySqlLikesRepository()
const likePostValidator = new LikePostValidator()

const LikePostsUseCase = new LikePostUseCase(
  mysqlLikesRepository,
  likePostValidator
)

const likePostController = new LikePostController(LikePostsUseCase)

export { LikePostsUseCase, likePostController }
