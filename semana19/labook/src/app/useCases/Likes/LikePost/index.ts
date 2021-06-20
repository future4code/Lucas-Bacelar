import { MySqlLikesRepository } from '../../../repositories/implementations/MySqlLikesRepository'
import { LikePostController } from './LikePostController'
import { LikePostUseCase } from './LikePostUseCase'

const mysqlLikesRepository = new MySqlLikesRepository()

const LikePostsUseCase = new LikePostUseCase(mysqlLikesRepository)

const likePostController = new LikePostController(LikePostsUseCase)

export { LikePostsUseCase, likePostController }
