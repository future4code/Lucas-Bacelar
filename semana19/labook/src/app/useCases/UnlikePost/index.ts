import { MySqlLikesRepository } from '../../repositories/implementations/MySqlLikesRepository'
import { UnlikePostController } from './UnlikePostController'
import { UnlikePostUseCase } from './UnlikePostUseCase'

const mysqlLikesRepository = new MySqlLikesRepository()

const UnlikePostsUseCase = new UnlikePostUseCase(mysqlLikesRepository)

const unlikePostController = new UnlikePostController(UnlikePostsUseCase)

export { UnlikePostsUseCase, unlikePostController }
